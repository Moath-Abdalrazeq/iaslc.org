import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import homePage from "../components/home-page.vue";
import annualReport from "../components/annual-report.vue";
import personalForm from '@/components/personal-form.vue'
import familyForm from '@/components/family-form.vue'
import worksForm from '@/components/works-form.vue'

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
    path: "/personalForm",
    name: "personalForm",
    component: personalForm,
  },
  {
    path: "/familyForm",
    name: "familyForm",
    component: familyForm,
  },
  {
    path: "/worksForm",
    name: "worksForm",
    component: worksForm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
