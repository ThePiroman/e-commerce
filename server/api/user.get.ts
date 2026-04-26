import { getSession } from "../utils/session";

export default defineEventHandler(async (event) => {
  const session = getSession(event)

  if (!session) {
    throw createError({ statusCode: 401 })
  }

  const runtimeConfig = useRuntimeConfig();

  const address = runtimeConfig.public.fetchAddress + '/users/';

  const user = await useFetch(address + session)

  return { phone: user.phone }
})