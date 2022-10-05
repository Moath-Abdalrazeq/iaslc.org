import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import homePage from "../components/home-page.vue";
import annualReport from "../components/annual-report.vue";
import personalFormAdd from '@/components/personal-form-add.vue'
import familyForm from '@/components/family-form.vue'
import worksForm from '@/components/works-form.vue'
import personalFormView from '@/components/personal-form-view.vue'
 import worksAdd from '@/components/works-add.vue'

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
    path: "/familyForm",
    name: "familyForm",
    component: familyForm,
  },
  {
    path: "/works",
    name: "worksForm",
    component: worksForm,
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
