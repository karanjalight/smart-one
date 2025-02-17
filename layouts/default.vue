<template>
    <div class="bg-green-300">
        <VitePwaManifest />
        <!-- <nuxt-link to="/">home</nuxt-link> -->
        <p>home</p>
    </div>
    <div>

        <slot />
    </div>
</template>


<style scoped>
.route-link-exact-active {
    color: blue;
}
.router-link-active{
    background-color: aqua;
}
</style>