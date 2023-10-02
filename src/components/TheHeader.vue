<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <router-link class="navbar-brand" :to="SHOP_ROUTE">
        КупиДевайс
      </router-link>
      <ul class="navbar-nav ms-auto">
        <template v-if="userLoggedIn">
          <li class="nav-item">
            <router-link class="nav-link" :to="ADMIN_ROUTE">
              Админ Панель
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="LOGIN_ROUTE">Войти</router-link>
          </li>
        </template>
        <template v-else>
          <li class="nav-item">
            <button
              type="button"
              class="btn btn-secondary"
              @click="userStore.setUserLoggedIn(true)">
              Авторизация
            </button>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
  import {
    ADMIN_ROUTE,
    BASKET_ROUTE,
    DEVICE_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE,
  } from "../utils/consts";
  import { storeToRefs } from "pinia";
  import { useUserStore } from "@/stores/user";

  const userStore = useUserStore();
  const { userLoggedIn } = storeToRefs(userStore);
</script>

<style scoped></style>
