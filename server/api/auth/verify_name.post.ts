import { FetchError } from 'ofetch';


export default defineEventHandler(async (event) => {
  const { phone } = await readBody(event);
  const runtimeConfig = useRuntimeConfig();

  const address = runtimeConfig.public.fetchAddress + '/users';

  try {
    const userList : Array<User> = await $fetch(`${address}`);

    const user : User | undefined = userList.find((user) => user.phone === phone);

    if (user) {

      return {success: true, name: user.name};
      
    } else {

      return {success: false};

    }


  } catch (error) {

    if (error instanceof FetchError) {

      throw createError({statusCode: error.statusCode, statusMessage: error.statusMessage});  

    }

  }

});