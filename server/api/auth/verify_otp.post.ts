import { otpMap } from '#imports';

export default defineEventHandler(async (event) => {
  const { phone, code } = await readBody(event);
  const runtimeConfig = useRuntimeConfig();

  const address = runtimeConfig.public.fetchAddress + '/users';

  const savedOtp = otpMap.get(phone);


  if (!savedOtp || savedOtp.trim() !== code.trim()) {
    throw createError({ statusCode: 401, statusMessage: 'Неверный код' });
  }

  otpMap.delete(phone);

  try {

    const userList : Array<User> = await $fetch(`${address}`);

    const user : User | undefined = userList.find((user) => user.phone === phone);
    
    if (user) {

      const fakeToken = `test_token_${Buffer.from(phone).toString('base64')}_${Date.now()}`;

      return <ResponseUser>{ 
        success: true, 
        token: fakeToken,
        user
      };

    } else {

      throw createError({ statusCode: 404, statusMessage: 'Пользователь не найден' });

    }

  } catch (error) {
    throw createError({ statusCode: 500, statusMessage: 'Ошибка связи с базой данных' });
  }

});