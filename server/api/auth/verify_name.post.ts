export default defineEventHandler(async (event) => {
  const { phone } = await readBody(event);
  const runtimeConfig = useRuntimeConfig();

  const address = runtimeConfig.public.fetchAddress + '/users';

  try {
    let userList : Array<User> = await $fetch(`${address}`);

    let user : User | undefined = userList.find((user) => user.phone === phone)

    if (user) {

      return {success: true, name: user.name}
      
    } else {

      return {success: false}
    }


  } catch (error) {

    throw createError({ statusCode: 500, statusMessage: 'Ошибка связи с базой данных' })

  }

})