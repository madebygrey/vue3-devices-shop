<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-4">
        <img :src="device.img" class="w-100" alt="" />
      </div>
      <div class="col-md-4">
        <div class="row">
          <h2 class="text-center">{{ device.name }}</h2>
          <span
            class="d-flex justify-content-center align-items-center m-auto"
            :style="{
              background: `url(${starBig}) no-repeat center`,
              backgroundSize: 'cover',
              width: 240 + 'px',
              height: 240 + 'px',
              fontSize: 54 + 'px',
            }">
            {{ device.rating }}
          </span>
        </div>
      </div>
      <div class="col-md-4">
        <div
          class="card p-3 d-flex flex-column align-items-center justify-content-around">
          <h3>от {{ device.price }} руб.</h3>
          <button type="button" class="btn btn-primary">
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
    <div class="row d-flex flex-column mt-3">
      <h2>Характеристики</h2>
      <!-- <div
        class="row p-3"
        v-for="(info, index) in device.info"
        :key="info.id"
        :style="{ background: index % 2 === 0 ? 'lightgray' : 'transparent' }">
        {{ info.title + ": " + info.descr }}
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
  import starBig from "../assets/img/star-big.png";
  import { ref, onMounted } from "vue";
  import { useRoute } from "vue-router";
  import { useDevicesStore } from "@/stores/devices";

  const route = useRoute();
  const devicesStore = useDevicesStore();
  const device = ref({});

  onMounted(() => {
    device.value = devicesStore.getDeviceById(+route.params.id)[0];
  });
</script>

<style lang="scss" scoped></style>
