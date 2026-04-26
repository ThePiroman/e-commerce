import { setSession } from "../utils/session";

export default defineEventHandler(async(event) => {
    const phone = await readBody(event);

    if (!phone) {
        throw createError('400');
    }

    const runtimeConfig = useRuntimeConfig();

    const address = runtimeConfig.public.fetchAddress + '/users';

    const userList = await useFetch<String[]>(address);

    let user = userList.find(phone) ?? await useFetch(address, {
        method: 'POST',
        body: {phone}
    });

    setSession(event, user.id);

    return {success : true};
    
})