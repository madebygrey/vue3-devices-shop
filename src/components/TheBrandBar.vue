<template>
  <div class="row d-flex">
    <div
      class="card p-3 col"
      :class="{ active: brand.id === selectedBrand.id }"
      v-for="brand in brands"
      :key="brand.id"
      @click="devicesStore.setSelectedBrand(brand)">
      {{ brand.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useDevicesStore } from "@/stores/devices";

  const devicesStore = useDevicesStore();
  const { brands, selectedBrand } = storeToRefs(devicesStore);
</script>

<style scoped>
  .card {
    cursor: pointer;
  }
  .card.active {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
</style>
