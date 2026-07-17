export default defineEventHandler(async (event) => {
  const { phone } = await readBody(event);
  const runtimeConfig = useRuntimeConfig();

  const address = runtimeConfig.public.fetchAddress + '/users';

  let user = null;
  console.log("step1");

  try {
    let userRecieved = await $fetch(`${address}`);

    userRecieved = userRecieved.filter((user) => user.phone === phone); // {encodeURIComponent(phone) doesn't work

    console.log(userRecieved)

    if (userRecieved && userRecieved.length > 0) {
      user = userRecieved[0]

      if (user && user.name) {
        return {success: true, name: user.name}
      } 

    }
  } catch (error) {
    console.log(error)
      throw createError({ statusCode: 500, statusMessage: 'Ошибка связи с базой данных' })
  }

  return {success: false}
})