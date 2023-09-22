import { createRouter, createWebHistory } from "vue-router";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "../utils/consts";
import useUserStore from "@/stores/user";
import ShopView from "../views/ShopView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: SHOP_ROUTE,
      name: "shop",
      component: ShopView,
    },
    {
      path: LOGIN_ROUTE,
      name: "login",
      component: () => import("../views/AuthView.vue"),
    },
    {
      path: REGISTRATION_ROUTE,
      name: "registration",
      component: () => import("../views/AuthView.vue"),
    },
    {
      path: DEVICE_ROUTE + "/:id",
      name: "device",
      component: () => import("../views/DeviceView.vue"),
    },
    {
      path: ADMIN_ROUTE,
      name: "admin",
      component: () => import("../views/AdminView.vue"),
      beforeEnter(to, from, next) {
        console.log("Manage Route Guard");
        next();
      },
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: BASKET_ROUTE,
      name: "basket",
      component: () => import("../views/BasketView.vue"),
      beforeEnter(to, from, next) {
        console.log("Manage Route Guard");
        next();
      },
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/:catchAll(.*)*",
      redirect: { name: "shop" },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth) {
    next();
    return;
  }

  const store = useUserStore();

  if (store.userLoggedIn) {
    next();
  } else {
    next({ name: "shop" });
  }
});

export default router;
