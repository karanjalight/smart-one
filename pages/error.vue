<template>
    <div class="h-screen w-screen overflow-hidden">
        <p>Error</p>
        <p> {{ error.statusCode }}</p>
        <p>oops</p>
        <p> {{ error.message }}</p> 
    </div>
</template>

<script setup>
    defineProps(['error'])
</script>
 