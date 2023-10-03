<template>
  <div class="auth d-flex justify-content-center align-items-center">
    <div class="card p-3">
      <h2 class="m-auto">{{ isLogin ? "Авторизация" : "Регистрация" }}</h2>
      <form>
        <div class="mt-3">
          <input
            type="email"
            class="form-control"
            placeholder="Введите ваш email" />
        </div>
        <div class="mt-3">
          <input
            type="password"
            class="form-control"
            placeholder="Введите ваш пароль" />
        </div>
        <div class="row mt-3">
          <div class="col">
            <template v-if="isLogin">
              Нет аккаунта?
              <router-link :to="REGISTRATION_ROUTE">
                Зарегистрируйся!
              </router-link>
            </template>
            <template v-else>
              Есть аккаунт?
              <router-link :to="LOGIN_ROUTE"> Войдите! </router-link>
            </template>
          </div>
          <div class="col d-flex justify-content-end">
            <button type="submit" class="btn btn-primary w-100">
              {{ isLogin ? "Войти" : "Зарегистрироваться" }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { REGISTRATION_ROUTE, LOGIN_ROUTE } from "../utils/consts";
  import { useRoute } from "vue-router";
  import { watch, ref } from "vue";

  const route = useRoute();
  const isLogin = ref(true);
  watch(
    () => route.path,
    (newId) => {
      isLogin.value = route.path === LOGIN_ROUTE ? true : false;
    }
  );
</script>

<style lang="scss" scoped>
  .auth {
    height: calc(100vh - 56px);
  }
</style>
