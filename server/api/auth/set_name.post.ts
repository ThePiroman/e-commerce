export default defineEventHandler(async (event) => {
  const { phone, name } = await readBody(event);
  const runtimeConfig = useRuntimeConfig();

  const address = runtimeConfig.public.fetchAddress + '/users';

  let user = null;

  try {
    user = await $fetch(address, {
      method: 'POST',
      body: { 
        phone, 
        name,
        createdAt: new Date().toISOString()}
    });

  } catch (error) {
    throw createError({ statusCode: 500, statusMessage: 'Ошибка связи с базой данных' });
  }

  const fakeToken = `test_token_${Buffer.from(phone).toString('base64')}_${Date.now()}`;

  return <ResponseUser>{ 
    success: true, 
    token: fakeToken,
    user
  };
});