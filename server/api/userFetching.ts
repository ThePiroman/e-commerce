export async function postUserPhone(userPhone : String) {
    const response = await useFetch('login', {method: "POST", body: userPhone});
    

    return response;
}