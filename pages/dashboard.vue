<template>
    <div class="">
        <div class="font-bold text-sky-600 border-b  pb-2">
            Dashboard
        </div>
        <UserProfile />
        <div class="grid lg:grid-cols-4 grid-cols-1 gap-4 mt-2 lg:mx-0 mx-5">
            <div
                class="flex items-center lg:h-20 h-28 bg-white border border-gray-300 rounded-2xl  md:flex-row md:max-w-xl hover:bg-sky-100">
                <div class=" bg-slate-200 rounded-l-xl h-full flex items-center w-24 justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-600 h-8 w-12" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M12 12.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M10.5 16a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0" />
                        <path fill="currentColor"
                            d="M17.526 5.116L14.347.659L2.658 9.997L2.01 9.99V10H1.5v12h21V10h-.962l-1.914-5.599zM19.425 10H9.397l7.469-2.546l1.522-.487zM15.55 5.79L7.84 8.418l6.106-4.878zM3.5 18.169v-4.34A3 3 0 0 0 5.33 12h13.34a3 3 0 0 0 1.83 1.83v4.34A3 3 0 0 0 18.67 20H5.332A3.01 3.01 0 0 0 3.5 18.169" />
                    </svg>

                </div>
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="my-2 text-lg  tracking-tight text-gray-800">Revenue</h5>
                    <p class="mb-3 text-sm font-bold text-gray-600">
                        KES. 0.00
                    </p>
                </div>
            </div>
            <!-- Meters -->
            <div
                class="flex items-center lg:h-20 h-28 bg-white border border-gray-300 rounded-2xl  md:flex-row md:max-w-xl hover:bg-sky-100">
                <div class=" bg-slate-200 rounded-l-xl h-full flex items-center w-24 justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-600 h-6 w-12" viewBox="0 0 16 16">
                        <path fill="currentColor"
                            d="M8 1a8 8 0 0 1 3.875 15h-7.75A8 8 0 0 1 8 1m4.53 12.53A6.36 6.36 0 0 0 14.406 9H13V8h1.329a6.4 6.4 0 0 0-.665-2H12V5h1.004a6.37 6.37 0 0 0-3.005-2.089V4h-1V2.671a6.5 6.5 0 0 0-2 0V4h-1V2.911A6.4 6.4 0 0 0 2.994 5h1.004v1H2.334a6.4 6.4 0 0 0-.665 2h1.329v1H1.592c0 1.711.666 3.32 1.876 4.53q.252.25.524.47h3.006l.571-8h.857l.571 8h3.006q.273-.22.524-.47z" />
                    </svg>

                </div>
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="my-2 text-lg  tracking-tight text-gray-800">Disabled Meters</h5>
                    <p class="mb-3 text-sm font-bold text-gray-600">
                        KES. 0.00
                    </p>
                </div>
            </div>
            <!-- Customers -->
            <div
                class="flex items-center lg:h-20 h-28 bg-white border border-gray-300 rounded-2xl  md:flex-row md:max-w-xl hover:bg-sky-100">
                <div class=" bg-slate-200 rounded-l-xl h-full flex items-center w-24 justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-600 h-8 w-12" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M17.928 19.634h2.138a1.165 1.165 0 0 0 1.116-1.555a6.85 6.85 0 0 0-6.117-3.95m0-2.759a3.664 3.664 0 0 0 3.665-3.664a3.664 3.664 0 0 0-3.665-3.674m-1.04 16.795a1.908 1.908 0 0 0 1.537-3.035a8.03 8.03 0 0 0-6.222-3.196a8.03 8.03 0 0 0-6.222 3.197a1.909 1.909 0 0 0 1.536 3.034zM9.34 11.485a4.16 4.16 0 0 0 4.15-4.161a4.151 4.151 0 0 0-8.302 0a4.16 4.16 0 0 0 4.151 4.16" />
                    </svg>
                </div>
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="my-2 text-lg  tracking-tight text-gray-800">Customers</h5>
                    <p class="mb-3 text-sm font-bold text-gray-600">
                        40
                    </p>
                </div>
            </div>
            <!-- locations -->
            <div
                class="flex items-center lg:h-20 h-28 bg-white border border-gray-300 rounded-2xl  md:flex-row md:max-w-xl hover:bg-sky-100">
                <div class=" bg-slate-200 rounded-l-xl h-full flex items-center w-24 justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-600 h-6 w-12" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M17.5 6.5L23 9v13l-7-3l-8 3l-7-3V6l5 2m10 11v-7M8 22V12m4 4.273S6 11.5 6 7c0-3.75 3-6 6-6s6 2.25 6 6c0 4.5-6 9.273-6 9.273ZM13 7a1 1 0 1 0-2 0a1 1 0 0 0 2 0Z"/></svg>

                </div>
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-1 text-lg  tracking-tight text-gray-800">Location</h5>
                    <p class="mb-1 text-sm font-normal text-blue-700">
                        View
                    </p>
                </div>
            </div>






        </div>
    </div>
    <!-- <div>
        <TableSort />
    </div> -->
</template>
<script setup>
import { useAuthStore } from "@/stores/auth";
import { onMounted } from "vue";

// Load user data when the dashboard mounts
const authStore = useAuthStore()    ;
onMounted(() => {
  authStore.loadAuthData();
});

// Define the page layout
definePageMeta({
  layout: "dashboard",
});
</script>

<style lang="scss" scoped></style>
