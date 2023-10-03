<template>
  <ul class="list-group">
    <li
      class="list-group-item"
      :class="{ active: item.id === selectedType.id }"
      v-for="item in types"
      :key="item.id"
      @click="devicesStore.setSelectedType(item)">
      {{ item.name }}
    </li>
  </ul>
</template>

<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useDevicesStore } from "@/stores/devices";

  const devicesStore = useDevicesStore();
  const { types, selectedType } = storeToRefs(devicesStore);
</script>

<style scoped>
  .list-group-item {
    cursor: pointer;
  }
</style>
