<template>
    <div class="bg-slate-500 w-full">
            <aside id="separator-sidebar"
                class="fixed top-0 left-0 rounded-2xl shadow-xl m-4 bg-slate-400 z-40 w-[20%] h-[96%] transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar">
                <div
                    class="h-full flex flex-col justify-between px-3 py-4 overflow-y-auto shadow-xl  rounded-xl  bg-white">
                    <ul class="font-medium">
                        <li>
                            <a href="#"
                                class="flex items-center justify-center p-2 gap-2  cursor-pointer   rounded-lg text-white group">
                                <NuxtImg src="/logo-short.png" class="lg:h-48 w-[80%] h-20 object-cover"
                                    alt="main-logo" />

                            </a>
                        </li>
                        <li>
                            <a href=""
                                class="flex bg-gradient-to-l from-indigo-950 to-blue-600 hover:bg-gradient-to-r hover:from-indigo-950 hover:to-blue-950 text-white items-center p-2 rounded-lg dark:hover:bg-gray-700 group">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                            d="M4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-3q-.425 0-.712-.288T14 20v-5q0-.425-.288-.712T13 14h-2q-.425 0-.712.288T10 15v5q0 .425-.288.713T9 21H6q-.825 0-1.412-.587T4 19" />
                                    </svg>
                                </div>
                                <div>
                                    <span class="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href=""
                                class="flex  hover:bg-gradient-to-l hover:from-blue-600 hover:to-sky-400 hover:text-white mt-2 text-gray-700 items-center p-2 rounded-lg dark:hover:bg-gray-700 group">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentColor" fill-rule="evenodd"
                                            d="M7.099 1.25H16.9c1.017 0 1.717 0 2.306.204a3.8 3.8 0 0 1 2.348 2.412l-.713.234l.713-.234c.196.597.195 1.307.195 2.36v14.148c0 1.466-1.727 2.338-2.864 1.297a.196.196 0 0 0-.271 0l-.484.442c-.928.85-2.334.85-3.262 0a.907.907 0 0 0-1.238 0c-.928.85-2.334.85-3.262 0a.907.907 0 0 0-1.238 0c-.928.85-2.334.85-3.262 0l-.483-.442a.196.196 0 0 0-.272 0c-1.137 1.04-2.864.169-2.864-1.297V6.227c0-1.054 0-1.764.195-2.361a3.8 3.8 0 0 1 2.348-2.412c.59-.205 1.289-.204 2.306-.204m.146 1.5c-1.221 0-1.642.01-1.96.121A2.3 2.3 0 0 0 3.87 4.334c-.111.338-.12.784-.12 2.036v14.004c0 .12.059.192.134.227a.2.2 0 0 0 .11.018a.2.2 0 0 0 .107-.055a1.695 1.695 0 0 1 2.296 0l.483.442a.907.907 0 0 0 1.238 0a2.407 2.407 0 0 1 3.262 0a.907.907 0 0 0 1.238 0a2.407 2.407 0 0 1 3.262 0a.907.907 0 0 0 1.238 0l.483-.442a1.695 1.695 0 0 1 2.296 0c.043.04.08.052.108.055a.2.2 0 0 0 .109-.018c.075-.035.135-.108.135-.227V6.37c0-1.252-.01-1.698-.12-2.037a2.3 2.3 0 0 0-1.416-1.462c-.317-.11-.738-.12-1.959-.12zM6.25 7.5A.75.75 0 0 1 7 6.75h.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m3.5 0a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75M6.25 11a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m3.5 0a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75m-3.5 3.5a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m3.5 0a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <span class="flex-1 ms-3 whitespace-nowrap">Billing Accounts</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href=""
                                class="flex  hover:bg-gradient-to-l hover:from-blue-600 hover:to-sky-400 hover:text-white mt-2 text-gray-700 items-center p-2 rounded-lg dark:hover:bg-gray-700 group">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="none" stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="1.5"
                                            d="M17.928 19.634h2.138a1.165 1.165 0 0 0 1.116-1.555a6.85 6.85 0 0 0-6.117-3.95m0-2.759a3.664 3.664 0 0 0 3.665-3.664a3.664 3.664 0 0 0-3.665-3.674m-1.04 16.795a1.908 1.908 0 0 0 1.537-3.035a8.03 8.03 0 0 0-6.222-3.196a8.03 8.03 0 0 0-6.222 3.197a1.909 1.909 0 0 0 1.536 3.034zM9.34 11.485a4.16 4.16 0 0 0 4.15-4.161a4.151 4.151 0 0 0-8.302 0a4.16 4.16 0 0 0 4.151 4.16" />
                                    </svg>
                                </div>
                                <div>
                                    <span class="flex-1 ms-3 whitespace-nowrap">Customers</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href=""
                                class="flex  hover:bg-gradient-to-l hover:from-blue-600 hover:to-sky-400 hover:text-white mt-2 text-gray-700 items-center p-2 rounded-lg dark:hover:bg-gray-700 group">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <g fill="none" stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="1.5" color="currentColor">
                                            <path
                                                d="M2 4.5h6.757a3 3 0 0 1 2.122.879L14 8.5m-9 5H2m6.5-6l2 2a1.414 1.414 0 1 1-2 2L7 10c-.86.86-2.223.957-3.197.227L3.5 10" />
                                            <path
                                                d="M5 11v4.5c0 1.886 0 2.828.586 3.414S7.114 19.5 9 19.5h9c1.886 0 2.828 0 3.414-.586S22 17.386 22 15.5v-3c0-1.886 0-2.828-.586-3.414S19.886 8.5 18 8.5H9.5" />
                                            <path d="M15.25 14a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0" />
                                        </g>
                                    </svg>
                                </div>
                                <div>
                                    <span class="flex-1 ms-3 whitespace-nowrap">Payments</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href=""
                                class="flex  hover:bg-gradient-to-l hover:from-blue-600 hover:to-sky-400 hover:text-white mt-2 text-gray-700 items-center p-2 rounded-lg dark:hover:bg-gray-700 group">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                        <path fill="currentColor"
                                            d="M8 1a8 8 0 0 1 3.875 15h-7.75A8 8 0 0 1 8 1m4.53 12.53A6.36 6.36 0 0 0 14.406 9H13V8h1.329a6.4 6.4 0 0 0-.665-2H12V5h1.004a6.37 6.37 0 0 0-3.005-2.089V4h-1V2.671a6.5 6.5 0 0 0-2 0V4h-1V2.911A6.4 6.4 0 0 0 2.994 5h1.004v1H2.334a6.4 6.4 0 0 0-.665 2h1.329v1H1.592c0 1.711.666 3.32 1.876 4.53q.252.25.524.47h3.006l.571-8h.857l.571 8h3.006q.273-.22.524-.47z" />
                                    </svg>
                                </div>
                                <div>
                                    <span class="flex-1 ms-3 whitespace-nowrap">Meter Devices</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href=""
                                class="flex  hover:bg-gradient-to-l hover:from-blue-600 hover:to-sky-400 hover:text-white mt-2 text-gray-700 items-center p-2 rounded-lg dark:hover:bg-gray-700 group">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22 5v2h-3v3h-2V7h-3V5h3V2h2v3zm-3 14H5V5h6V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6h-2zm-4-6v4h2v-4zm-4 4h2V9h-2zm-2 0v-6H7v6z"/></svg>                                </div>
                                <div>
                                    <span class="flex-1 ms-3 whitespace-nowrap">Reports</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href=""
                                class="flex  hover:bg-gradient-to-l hover:from-blue-600 hover:to-sky-400 hover:text-white mt-2 text-gray-700 items-center p-2 rounded-lg dark:hover:bg-gray-700 group">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <g fill="none">
                                            <circle cx="12" cy="12" r="2" stroke="currentColor" stroke-width="1.5" />
                                            <path fill="currentColor"
                                                d="m5.399 5.88l.375-.65a.75.75 0 0 0-.925.14zM3.4 9.344l-.717-.222a.75.75 0 0 0 .342.871zm-.002 5.311l-.375-.65a.75.75 0 0 0-.341.872zm2 3.464l-.55.51a.75.75 0 0 0 .925.14zm4.6 2.655h-.75c0 .35.243.653.584.731zm4.001.002l.167.732a.75.75 0 0 0 .583-.732zM18.6 18.12l-.375.65a.75.75 0 0 0 .925-.14zm1.998-3.466l.717.222a.75.75 0 0 0-.342-.871zm.002-5.311l.375.65a.75.75 0 0 0 .341-.872zm-2-3.465l.55-.509a.75.75 0 0 0-.925-.14zM14 3.225h.75a.75.75 0 0 0-.583-.731zm-4-.002l-.167-.732a.75.75 0 0 0-.583.732zm4 1.849h-.75zm5 8.66l-.375.65zm-2 3.464l-.375.65zM5 13.732l.375.65zm2-6.928l-.375.65zM4.117 9.566a8.24 8.24 0 0 1 1.831-3.177l-1.1-1.02a9.74 9.74 0 0 0-2.164 3.754zm.738 6.559a8.3 8.3 0 0 1-.74-1.69l-1.432.443a9.8 9.8 0 0 0 .873 1.997zm1.094 1.486a8.3 8.3 0 0 1-1.094-1.486l-1.299.75a9.8 9.8 0 0 0 1.292 1.755zm7.884 2.435a8.24 8.24 0 0 1-3.666-.002l-.334 1.462a9.74 9.74 0 0 0 4.334.003zm6.05-5.612a8.24 8.24 0 0 1-1.831 3.177l1.1 1.02a9.74 9.74 0 0 0 2.164-3.754zm-.738-6.559q.471.823.74 1.69l1.432-.443a9.8 9.8 0 0 0-.873-1.997zM18.05 6.389c.41.443.778.94 1.094 1.486l1.299-.75A9.8 9.8 0 0 0 19.15 5.37zm-7.884-2.435a8.24 8.24 0 0 1 3.666.002l.334-1.462a9.74 9.74 0 0 0-4.334-.003zm.583 1.118v-1.85h-1.5v1.85zM7.375 6.154L5.774 5.23l-.75 1.299l1.6.924zm-2.75 6.929l-1.601.924l.75 1.299l1.6-.924zm.75-3.465l-1.6-.923l-.75 1.3l1.6.923zm5.375 11.157v-1.847h-1.5v1.847zm-4.125-4.228l-1.601.924l.75 1.3l1.6-.925zm12.351.924l-1.601-.924l-.75 1.299l1.601.924zm-4.226 3.306v-1.849h-1.5v1.85zm5.476-12.083l-1.601.924l.75 1.3l1.601-.925zm.748 5.312l-1.599-.924l-.75 1.3l1.6.923zM14.75 5.072V3.225h-1.5v1.847zm3.476.158l-1.601.924l.75 1.3l1.601-.925zm-4.976-.158c0 2.117 2.292 3.44 4.125 2.381l-.75-1.299a1.25 1.25 0 0 1-1.875-1.082zm5.375 4.546c-1.833 1.059-1.833 3.705 0 4.764l.75-1.3a1.25 1.25 0 0 1 0-2.165zm-1.25 6.929c-1.833-1.059-4.125.264-4.125 2.381h1.5a1.25 1.25 0 0 1 1.875-1.082zm-6.625 2.381c0-2.117-2.292-3.44-4.125-2.381l.75 1.299a1.25 1.25 0 0 1 1.875 1.082zm-5.375-4.546c1.833-1.059 1.833-3.705 0-4.764l-.75 1.3a1.25 1.25 0 0 1 0 2.165zm3.875-9.31a1.25 1.25 0 0 1-1.875 1.082l-.75 1.3c1.833 1.058 4.125-.265 4.125-2.382z" />
                                        </g>
                                    </svg>
                                </div>
                                <div>
                                    <span class="flex-1 ms-3 whitespace-nowrap">Settings</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href=""
                                class="flex  hover:bg-gradient-to-l hover:from-blue-600 hover:to-sky-400 hover:text-white mt-2 text-gray-700 items-center p-2 rounded-lg dark:hover:bg-gray-700 group">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 18.25a.75.75 0 0 0 0 1.5h6A1.75 1.75 0 0 0 19.75 18V6A1.75 1.75 0 0 0 18 4.25h-6a.75.75 0 0 0 0 1.5h6a.25.25 0 0 1 .25.25v12a.25.25 0 0 1-.25.25z"/><path fill="currentColor" fill-rule="evenodd" d="M14.503 14.365c.69 0 1.25-.56 1.25-1.25v-2.24c0-.69-.56-1.25-1.25-1.25H9.89l-.02-.22l-.054-.556a1.227 1.227 0 0 0-1.751-.988a15 15 0 0 0-4.368 3.164l-.099.103a1.253 1.253 0 0 0 0 1.734l.1.103a15 15 0 0 0 4.367 3.164a1.227 1.227 0 0 0 1.751-.988l.054-.556l.02-.22zm-5.308-1.5a.75.75 0 0 0-.748.704q-.028.435-.07.871l-.016.162a13.6 13.6 0 0 1-3.516-2.607a13.6 13.6 0 0 1 3.516-2.607l.016.162q.042.435.07.871a.75.75 0 0 0 .748.704h5.058v1.74z" clip-rule="evenodd"/></svg>                                </div>
                                <div>
                                    <span class="flex-1 ms-3 whitespace-nowrap">Logout</span>
                                </div>
                            </a>
                        </li>




                    </ul>
                </div>
            </aside>
        </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>