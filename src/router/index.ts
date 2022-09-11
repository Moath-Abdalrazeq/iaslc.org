import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import homePage from "../components/home-page.vue";
import donatePage from "../components/donate-page.vue";
import annualReport from "../components/annualReport.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "homePage",
    component: homePage,
  },
  {
    path: "/donatePage",
    name: "donatePage",
    component: donatePage,
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
