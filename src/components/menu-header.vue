<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { data } from "../services/menu-service";
import logoIaslc from "../assets/iaslc.logo.png";
import languageSelection from "./language-selection.vue";
import SearchBar from "./search-bar.vue";
import MeetingsWebinars from "./meetings-webinars.vue";
import ResearchEducation from "./research-education.vue";
import IaslcNews from "./iaslc-news.vue";
import MembershipSelection from "./membership-selection.vue";
import PatientAdvocacy from "./patient-advocacy.vue";
import FoundationSelection from "./foundation-selection.vue";
import AboutUs from "./about-us.vue";
import MenuPartOne from "./menu-part-one.vue";
import ScrollMenu from "./scroll-menu.vue";
import CloseHero from "./close-hero.vue";
import MenuHero from "./menu-hero.vue";
import logoResp from "../assets/logo-responsive.jpg";
import BaseMenu from "./base-menu.vue";

export default defineComponent({
  components: {
    languageSelection,
    SearchBar,
    MeetingsWebinars,
    ResearchEducation,
    IaslcNews,
    MembershipSelection,
    PatientAdvocacy,
    FoundationSelection,
    AboutUs,
    MenuPartOne,
    ScrollMenu,
    CloseHero,
    MenuHero,

    BaseMenu,
  },
  setup() {
    let showMenu = ref(false);
    let menuData = ref(data);
    let nameClicked = ref(false);

    return {
      logoIaslc,
      showMenu,
      logoResp,
      menuData,
      nameClicked,
    };
  },
});
</script>

<template>
  <!-- logo -->

  <div class="fixed bg-white w-full">
    <div class="flex justify-between lg:justify-around">
      <router-link to="/" class="flex lg:m-auto">
        <img :src="logoIaslc" class="w-32 mt-2 lg:flex hidden" />
        <img :src="logoResp" class="w-40 mt-2 flex lg:hidden" />
      </router-link>
      <!-- menu -->

      <div class="lg:justify-between text-2xl lg:flex mb-4 mt-6 lg:text-xl">
        <div v-for="(item, index) in menuData" :key="index">
          <button @click="nameClicked = !nameClicked">{{ item.name }}</button>
          <base-menu
            :menu-data="item"
            :current-index="index"
            :name-clicKed="nameClicked"
          ></base-menu>
        </div>
      </div>

      <div class="flex">
        <div class="px-5 lg:hidden mt-3">
          <button class="bg-red-600 p-1 w-28 text-white font-bold">
            DONATE
          </button>
        </div>

        <button
          @click="showMenu = !showMenu"
          type="button"
          class="lg:hidden mx-4"
        >
          <menu-hero></menu-hero>
        </button>
      </div>
    </div>
  </div>
</template>
