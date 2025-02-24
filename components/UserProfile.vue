<script setup>
import { useAuthStore } from "@/stores/auth";
import { computed, onMounted } from "vue";

const authStore = useAuthStore();

import { watchEffect, ref } from "vue";

const username = ref("Guest");

watchEffect(() => {
  username.value = authStore.user?.username || "Guest";
});

</script>

<template>
  <div class='uppercase'>
      {{ username }}
      <!-- {{ authStore.user }} -->
  </div>
</template>
  