<template>
  <div class="container">
    <div class="row flex-column">
      <button
        type="button"
        class="btn btn-primary mt-4 p-3"
        @click="() => (typeVisible = true)">
        Добавить тип
      </button>
      <button
        type="button"
        class="btn btn-secondary mt-4 p-3"
        @click="() => (brandVisible = true)">
        Добавить бренд
      </button>
      <button
        type="button"
        class="btn btn-success mt-4 p-3"
        @click="() => (deviceVisible = true)">
        Добавить устройство
      </button>
    </div>
    <CreateType :show="typeVisible" @onHide="() => (typeVisible = false)" />
    <CreateBrand :show="brandVisible" @onHide="() => (brandVisible = false)" />
    <CreateDevice
      :show="deviceVisible"
      @onHide="() => (deviceVisible = false)" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  import CreateType from "@/components/modals/CreateType.vue";
  import CreateBrand from "@/components/modals/CreateBrand.vue";
  import CreateDevice from "@/components/modals/CreateDevice.vue";

  const typeVisible = ref(false);
  const brandVisible = ref(false);
  const deviceVisible = ref(false);
</script>

<style lang="scss" scoped></style>
