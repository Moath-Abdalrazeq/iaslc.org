import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import homePage from "../components/home-page.vue";
import annualReport from "../components/annual-report.vue";
import personalAdd from "@/components/personal-form-add.vue";
import familyAdd from "@/components/family-form-add.vue";
import worksAdd from "@/components/works-form-add.vue";
import family from "@/components/family.vue";
import work from "@/components/work.vue";

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
  {
    path: "/personal/Add",
    name: "personalAdd",
    component: personalAdd,
  },
  {
    path: "/family/Add",
    name: "familyAdd",
    component: familyAdd,
  },
  {
    path: "/works/Add",
    name: "worksAdd",
    component: worksAdd,
  },
  {
    path: "/work",
    name: "work",
    component: work,
  },
  {
    path: "/family",
    name: "family",
    component: family,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
