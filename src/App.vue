<template>
  <TheHeader />
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
  import TheHeader from "./components/TheHeader.vue";
</script>

<style scoped></style>
