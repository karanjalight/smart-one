<template>
    <div class="bg-green-300">
        <VitePwaManifest />
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