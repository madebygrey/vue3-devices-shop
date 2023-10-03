!
<template>
  <div
    class="col-md-3 card mt-3"
    @click="router.push(DEVICE_ROUTE + '/' + props.device.id)">
    <img
      :src="props.device.img"
      class="card-img-top"
      :alt="props.device.name" />
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <span class="text-black-50">Samsung...</span>
        <span class="d-flex align-items-center">
          {{ props.device.rating }} <img :src="star" alt="star" />
        </span>
      </div>
      <span>{{ props.device.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import star from "../assets/img/star.svg";
  import { useRouter } from "vue-router";
  import { DEVICE_ROUTE } from "@/utils/consts";

  const props = defineProps(["device"]);
  const router = useRouter();
</script>

<style scoped>
  .card {
    cursor: pointer;
    border: none;
  }
  .card img {
    max-width: 100%;
  }
</style>
