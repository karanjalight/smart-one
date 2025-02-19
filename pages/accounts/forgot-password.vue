<template>
    <div class="flex justify-between flex-col  items-center h-screen">
        <div></div>
        <form
            class="lg:w-[25%] w-[100%] flex flex-col justify-between j mx-auto lg:bg-white px-6 lg:px-8 py-10 pt-5 lg:border lg:shadow-xl rounded-xl">
            <div>
                <div class="flex items-center justify-center ">
                    <NuxtImg src="/logo-long.png" class="lg:w-[60%] w-[80%] h-32 object-cover" />
                </div>
                <h2 class="text-gray-800 text-2xl font-bold ">
                    Forgot password
                </h2>
                <p class="text-xs border-b border-blue-200 w-full pb-2 mb-2">
                    An email with a reset link will be sent
                </p>

                <label for="email-address-icon" class="block mt-5 text-sm font-medium text-gray-700 ">
                    Your
                    Email
                </label>
                <div class="relative mb-2">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 20 16">
                            <path
                                d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                            <path
                                d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                        </svg>
                    </div>
                    <input type="text" id="email-address-icon"
                        class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                        placeholder="name@gmail.com">
                </div>

                <nuxt-link to="/accounts/login" class="text-blue-500 text-xs my-4  font-bold">
                    Back to Login
                </nuxt-link>
                <button type="submit" class="text-white hover:bg-gradient-to-r hover:from-indigo-950 hover:to-blue-950 focus:ring-4 mt-6 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full px-5 py-2.5 text-center bg-gradient-to-l from-blue-600 to-blue-500 
                    transition-all duration-300 ease-in-out hover:shadow-lg">
                    Send
                </button>

            </div>
        </form>
        <div class="flex gap-2 items-center text-sm mb-8 justify-center text-gray-500">
            <nuxt-link to="/" class="border-r pr-2 border-gray-400 hover:underline hover:text-blue-600">Home</nuxt-link>
            <nuxt-link to="/about" class="hover:underline hover:text-blue-600">About</nuxt-link>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'accounts'

})
</script>

<style lang="scss" scoped></style>