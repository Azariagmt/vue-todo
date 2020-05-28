import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Activities from "@/components/Activities.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/activities",
    name: "Activities",
    component: Activities
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
