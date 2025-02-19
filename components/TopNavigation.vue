<template>
    <div class="flex justify-between Hide items-center p-2 border-b border-gray-300 w-full">
  
      <div class="flex items-center justify-center gap-2">
        <div class="block md:hidden px-3 font-bold" @click.prevent="openSideBar" >
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 512 512"><path fill="black" d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"/></svg>
        </div>
        
      </div>
      <nuxt-link to="/">
          <div class="flex justify-center items-center gap-3">
            <nuxt-img class="w-24 md:w-32" :src="'/jitreat_logo_long.png'" alt="itisha" style="object-fit: cover; position: center" />
          </div>
        </nuxt-link>
        
  
      <!-- <TopNavNotification /> -->
      <div class="flex items-center gap-3">
        <AccountDropdown/>
      </div>
  
    </div>
  </template>
    
  <script setup>
  
  //emits
  const emit = defineEmits(['open_sidebar']);
  
  //functions
  const openSideBar = () => {
    emit('open_sidebar');
  }
  </script>
    