<script setup>
import { useAuthStore } from "@/stores/auth";
import { computed, onMounted } from "vue";

const authStore = useAuthStore();

// Load user data from localStorage when the component mounts
onMounted(() => {
  authStore.loadAuthData();
});

console.log('bugs')
const username = computed(() => authStore.user?.username || "Guest");
const email = computed(() => authStore.user?.email || "Guest");
</script>

<template>
  <div>
      {{ username }}
      {{ authStore.user }}
  </div>
</template>
