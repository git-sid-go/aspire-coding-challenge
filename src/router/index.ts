import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue"),
  },
  {
    path: "/cards",
    name: "Cards",
    component: () =>
      import(/* webpackChunkName: "cards" */ "../views/Cards.vue"),
  },
  {
    path: "/apply-and-manage-loans",
    name: "Loans",
    component: () =>
      import(/* webpackChunkName: "loans" */ "../views/Loans.vue"),
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/apply-and-manage-loans/new-loan",
    name: "NewLoan",
    component: () =>
      import(/* webpackChunkName: "newloan" */ "../views/NewLoan.vue"),
    meta: {
      authRequired: true,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authRequired = to.matched.some((route) => route.meta.authRequired);
  if (!authRequired) return next();
  if (store.getters["auth/isLoggedIn"]) {
    next();
  } else {
    next("/register");
  }
});

export default router;
