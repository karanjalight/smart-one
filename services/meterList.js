import { authHeader } from "./auth-header";

export const meterService = {
  getMeterList,
};

async function getMeterList() {
    const API_URL = useRuntimeConfig().public.apiBase;
    return await $fetch(API_URL + `/meter-list/`, {
      method: 'GET',
      headers: authHeader()
    });
  }
  