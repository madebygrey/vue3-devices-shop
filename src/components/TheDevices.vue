<template>
  <div class="row">
    <TheDevice v-for="device in devices" :key="device.id" :device="device" />
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useDevicesStore } from "@/stores/devices";

  import TheDevice from "@/components/TheDevice.vue";

  const devicesStore = useDevicesStore();
  const { devices } = storeToRefs(devicesStore);
</script>

<style scoped></style>
