<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import SubMenu from "./sub-menu.vue";
import { data, dataMenu } from "../services/menu-service";
import logo from "../assets/iaslc.logo.png";
import SearchBar from "./search-bar.vue";
import LanguageSelection from "./language-selection.vue";
import logoResponsive from "../assets/logo-responsive.jpg";
import MenuHero from "./menu-hero.vue";
import CloseHero from "./close-hero.vue";
export default defineComponent({
  components: { SubMenu, SearchBar, LanguageSelection, MenuHero, CloseHero },
  props: { hideOnScroll: Boolean },

  setup() {
    let showMenu = ref(false);
    let pages = ref(data);
    let firstPages = ref(dataMenu);
    watch(
      () => data,
      () => {
        pages.value = data;
      }
    );
    return { pages, logo, firstPages, logoResponsive, showMenu };
  },
});
</script>
<template>
  <div class="fixed bg-white w-full">
    <!-- language selection -->
    <span v-if="!hideOnScroll" class="lg:flex justify-end hidden"
      ><language-selection></language-selection
    ></span>

    <div class="flex justify-between">
      <!--  logo  -->
      <img :src="logo" class="w-32 ml-8 lg:flex hidden mb-2" />
      <img :src="logoResponsive" class="w-48 ml-4 lg:hidden flex p-4" />
      <!--  menu responsive -->
      <button class="bg-red-600 h-8 w-20 mt-6 lg:hidden text-white font-bold">
        DONATE
      </button>
      <button
        @click="showMenu = !showMenu"
        type="button"
        class="lg:hidden mx-4"
      >
        <menu-hero></menu-hero>
      </button>

      <div
        :class="{
          '  h-screen absolute w-screen    bg-white  ': showMenu,
          'hidden lg:block ': !showMenu,
        }"
      >
        <div class="lg:flex block mr-8">
          <button @click="showMenu = false" v-if="showMenu" class="lg:hidden">
            <close-hero></close-hero>
          </button>

          <div v-if="!hideOnScroll" class="lg:flex lg:ml-auto">
            <hr class="lg:hidden w-4/5" />

            <div class="lg:flex block">
              <div
                v-for="(firstpage, index) in firstPages"
                :key="index"
                class="flex lg:mr-4 m-auto p-4 lg:p-0 border-b-2 lg:border-b-0"
              >
                <span v-if="firstpage.label && !hideOnScroll">{{
                  firstpage.label
                }}</span>
                <sub-menu :index="index" :pages="firstpage"> </sub-menu>
              </div>
              <div class="mx-8"><search-bar></search-bar></div>
              <button
                class="bg-red-600 w-20 lg:block hidden text-white font-bold lg:items-center"
              >
                DONATE
              </button>
            </div>
          </div>
        </div>
        <div class="lg:flex lg:justify-end block text-lg mr-4">
          <div
            v-for="(page, index) in pages"
            :key="index"
            class="flex p-4 border-b-2 lg:border-b-0"
          >
            <span v-if="!page.sub">{{ page.label }} </span>

            <sub-menu :index="index" :pages="page"> </sub-menu>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
