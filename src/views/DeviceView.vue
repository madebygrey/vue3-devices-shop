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
      <div
        class="row p-3"
        v-for="(info, index) in descriptions"
        :key="info.id"
        :style="{ background: index % 2 === 0 ? 'lightgray' : 'transparent' }">
        {{ info.title + ": " + info.descr }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import starBig from "../assets/img/star-big.png";
  const device = {
    id: 1,
    name: "Iphone 12 Pro",
    price: 25000,
    rating: 5,
    img: "https://5.imimg.com/data5/SELLER/Default/2021/1/WI/AB/HP/14753644/iphone-12-pro-max-2-.jpg",
  };
  const descriptions = [
    {
      id: 1,
      title: "Оперативная память",
      descr: "5 гб",
    },
    {
      id: 2,
      title: "Камера",
      descr: "12 мп",
    },
    {
      id: 3,
      title: "Процессор",
      descr: "Пентиум 3",
    },
    {
      id: 4,
      title: "Кол-во ядер",
      descr: "2",
    },
    {
      id: 5,
      title: "Аккумулятор",
      descr: "4000",
    },
  ];
</script>

<style lang="scss" scoped></style>
