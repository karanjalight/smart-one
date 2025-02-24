<template>
    <div>

        <Head>
            <Title>Smart One - Contact Us</Title>
        </Head>

        <nav
            class="bg-gradient-to-r opacity-1 from-white to-sky-600  via-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
            <div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto lg:p-4 p-2">
                <nuxt-link to="/" class="flex items-center lg:space-x-3 rtl:space-x-reverse">
                    <NuxtImg src="/logo.png" class="lg:w-[80%] h-12 object-cover" />
                    <span class="self-center font-semibold whitespace-nowrap gradient-text text-xl text-sky-600">Smart
                        One</span>
                </nuxt-link>
                <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <nuxt-link to="/accounts/login"
                        class="text-white flex gap-2 bg-gradient-to-l from-indigo-950 to-blue-600 hover:bg-gradient-to-r hover:from-indigo-950 hover:to-blue-950 lg:px-10 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:focus:ring-sky-800">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 17v4m-2-1l4-2m-4 0l4 2m-9-3v4m-2-1l4-2m-4 0l4 2m12-3v4m-2-1l4-2m-4 0l4 2M9 6a3 3 0 1 0 6 0a3 3 0 0 0-6 0m-2 8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2" />
                            </svg>
                        </div>
                        <div>
                            Login
                        </div>
                    </nuxt-link>

                    <button data-collapse-toggle="navbar-sticky" type="button"
                        class="inline-flex items-center hidden p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                        aria-controls="navbar-sticky" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5 text-gray-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul
                        class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <nuxt-link to="/"
                                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-700 md:p-0">
                                Home
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/about"
                                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-700 md:p-0">
                                About
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/contact"
                                class="block py-2 px-3 text-blue-600 rounded md:bg-transparent md:text-blue-700 md:p-0">
                                Contact
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- advertisers -->
        <ContactForm class="mt-10" />
        <!-- end form -->
        <footer class=" lg:rounded lg:mt-0  bg-gradient-to-l from-indigo-950 to-blue-600">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class="md:flex md:justify-between">
                    <div class="mb-6 md:mb-0">
                        <a href="https://tazama.co.ke/" class="flex flex-col gap-1 items-center">
                            <span class="self-center uppercase text-2xl text-white whitespace-nowrap">Smart One</span>
                        </a>
                    </div>
                    <div class="grid grid-cols-2 gap-4 sm:gap-2 text-xs sm:grid-cols-4">
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-whiteuppercase">
                                Resources
                            </h2>
                            <ul class="text-white font-medium">
                                <li class="mb-4">
                                    <nuxt-link to="/">Home</nuxt-link>
                                </li>
                                <li class="mb-4">
                                    <nuxt-link to="/about">about</nuxt-link>
                                </li>
                                <li class="mb-4">
                                    <nuxt-link to="/faqs">FAQs</nuxt-link>
                                </li>
                                <li class="mb-4">
                                    <nuxt-link to="/faqs">Contact Us</nuxt-link>
                                </li>

                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-whiteuppercase">
                                Follow us
                            </h2>
                            <ul class="text-white font-medium">
                                <li class="mb-4">
                                    <a href="https://web.facebook.com/smart-one" class="hover:underline">Facebook</a>
                                </li>
                                <li class="mb-4">
                                    <a href="https://www.instagram.com/smart-one/" class="hover:underline">Instagram</a>
                                </li>
                                <li>
                                    <a href="https://x.com/smart-one" class="hover:underline">Twitter</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-whiteuppercase">
                                Legal
                            </h2>
                            <ul class="text-white font-medium">
                                <li class="mb-4">
                                    <a href="/faqs" class="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="/faqs" class="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-whiteuppercase">
                                Contact Us
                            </h2>
                            <ul class="text-white font-medium">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">+254729 084 355 </a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline">smartone@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div class="sm:flex sm:items-center sm:justify-center">
                    <span class="text-sm sm:text-center text-white">© 2025
                        <a href="/" class="hover:underline">Smart one™</a>. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>

        <!-- <AccountsLogin /> -->
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>