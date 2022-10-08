import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import homePage from "../components/home-page.vue";
import annualReport from "../components/annual-report.vue";
import personalFormAdd from '@/components/personal-form-add.vue'
import familyFormAdd from '@/components/family-form-add.vue'
import worksView from '@/components/works-view.vue'
import personalFormView from '@/components/personal-form-view.vue'
 import worksAdd from '@/components/works-add.vue'
 import familyFormView from '@/components/family-form-view.vue'
 
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
    name: "personalFormAdd",
    component: personalFormAdd,
  },
  {
    path: "/family/Add",
    name: "familyFormAdd",
    component: familyFormAdd,
  },
  {
    path: "/works",
    name: "worksView",
    component: worksView,
  },
  {
    path: "/personal",
    name: "personalFormView",
    component: personalFormView,
  },
 
  {
    path: "/works/Add",
    name: "worksAdd",
    component: worksAdd,
  },
  {
    path: "/family",
    name: "familyFormView",
    component: familyFormView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
