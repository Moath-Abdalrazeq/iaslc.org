import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import homePage from "../components/home-page.vue";
import annualReport from "../components/annual-report.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "homePage",
    component: homePage,
  },
  {
    path: "/annualReport",
    name: "annualReport",
    component: annualReport,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
