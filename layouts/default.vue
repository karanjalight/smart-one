<template>
    <div class="bg-green-300 font-mono">
        <!-- <VitePwaManifest /> -->
        <!-- <nuxt-link to="/">home</nuxt-link> -->
    </div>
    <div>
        <slot />
    </div>  
</template>

<style scoped>
.route-link-exact-active {
    color: blue;
}
.router-link-active {
    background-color: aqua;
}
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

.font-custom {
    font-family: 'Inter', sans-serif;
}
</style>