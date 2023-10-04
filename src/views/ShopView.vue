<template>
  <div class="mt-3">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <TheTypeBar />
        </div>
        <div class="col-md-9">
          <TheBrandBar />
          <TheDevices />
          <ThePages />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import TheTypeBar from "../components/TheTypeBar.vue";
  import TheBrandBar from "../components/TheBrandBar.vue";
  import TheDevices from "@/components/TheDevices.vue";
  import ThePages from "@/components/ThePages.vue";
</script>

<style lang="scss" scoped></style>
