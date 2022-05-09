import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "top",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: () => import("../views/TopView.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: () => import("../views/ProfileView.vue"),
  },
  {
    path: "/home",
    name: "home",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/authorized",
    name: "authorized",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: () => import("../views/AuthorizedView.vue"),
  },
  {
    path: "/login",
    name: "login",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
