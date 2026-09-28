import { otpMap } from '#imports';
import { FetchError } from 'ofetch';

export default defineEventHandler(async (event) => {
  const { phone, code } = await readBody(event);
  const runtimeConfig = useRuntimeConfig();

  const address = runtimeConfig.public.fetchAddress + '/users';

  const savedOtp = otpMap.get(phone);

  if (!savedOtp || savedOtp.trim() !== code.trim()) {
    throw createError({ statusCode: 401, statusMessage: 'Неверный код' });
  }

  try {

    const userList : Array<User> = await $fetch(`${address}`);

    const user : User | undefined = userList.find((user) => user.phone === phone);
    
    if (user) {

      const fakeToken = `test_token_${Buffer.from(phone).toString('base64')}_${Date.now()}`;

      otpMap.delete(phone);

      return <ResponseUser>{ 
        success: true, 
        token: fakeToken,
        user
      };


    } else {

      return {success: false};

    }

  } catch (error) {

    if (error instanceof FetchError) {

      throw createError({statusCode: error.statusCode, statusMessage: error.statusMessage});  

    }

  }

});