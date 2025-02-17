<template>
  <div>
    <!-- <VitePwaManifest /> -->
    <p>home page</p>
    <ul>
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">about</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/accounts/login">login</nuxt-link>
      </li>
    </ul>

    <AccountsLogin />
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>