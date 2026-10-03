import { FetchError } from 'ofetch';
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
    if (error instanceof FetchError) {

      throw createError({statusCode: error.statusCode, statusMessage: error.statusMessage});  

    }
  }

  const fakeToken = `test_token_${Buffer.from(phone).toString('base64')}_${Date.now()}`;

  return <ResponseUser>{ 
    success: true, 
    token: fakeToken,
    user
  };
});