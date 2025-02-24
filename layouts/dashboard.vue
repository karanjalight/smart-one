<template>
     <Head>
      <Title>Smart One - Dashboard</Title>
    </Head>

    <div class="flex lg:bg-slate-200 lg:gap-10 gap-2 h-screen overflow-y-hidden">
        <div class="lg:w-1/5 w-full lg:block hidden">
            <SideNav />
        </div>
        <div class="lg:w-4/5 w-full lg:m-4 space-y-4 ">
            <div class="bg-white w-full h-10 flex justify-between  items-center text-sm p-4 px-2 lg:rounded-full">
                <div class="flex gap-1">
                    <div class="bg-gradient-to-r from-blue-600 bg-sky-500 h-5 w-5 rounded-full">

                    </div>
                    <div>
                        <p class="text-gray-600 ">Dashboard</p>
                    </div>
                </div>
                <div>
                    <div class="flex gap-2 items-center text-gray-900 pr-4">
                        <div class="flex items-center justify-center w-6 h-6 overflow-hidden bg-sky-200 animate-pulse rounded-full">
                            <div>
                                <svg class=" w-4 h-4 text-blue-900 " fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                        </div>
                        <div>
                          <UserProfile />       
                        </div>

                    </div>
                </div>

            </div>
            <div class="h-[93%] bg-white rounded-2xl shadow-xl lg:p-5 p-1 ">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>