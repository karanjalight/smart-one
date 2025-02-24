import { authHeader } from "./auth-header";

var headers = authHeader()

export const requestOptions = {
    method: 'GET',
    headers: authHeader()
};


export const userService = {
    login,
};


async function login(email, password) {
    const API_URL = useRuntimeConfig().public.apiBase;
    return await $fetch(API_URL + "/login/", {
        method: 'POST',
        body: {email, password}
    });
}
