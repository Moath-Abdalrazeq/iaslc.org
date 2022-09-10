<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import SubMenu from "./sub-menu.vue";
import { data } from "../services/menu-service";
import logo from "../assets/logo.jpg";
import SearchBar from "./search-bar.vue";
import LanguageSelection from "./language-selection.vue";
import logoResponsive from "../assets/logo-responsive.jpg";
import MenuHero from "./menu-hero.vue";
import CloseHero from "./close-hero.vue";
import SearchHero from "./search-hero.vue";
import ArrowHover from "./arrow-hover.vue";
export default defineComponent({
  components: {
    SubMenu,
    SearchBar,
    LanguageSelection,
    MenuHero,
    CloseHero,
    SearchHero,
    ArrowHover,
  },
  props: { hideOnScroll: Boolean },

  setup() {
    let searchBox = ref(false);
    let showMenu = ref(false);
    let pages = ref(data);

    return { pages, logo, logoResponsive, showMenu, searchBox };
  },
});
</script>
<template>
  <div class="fixed bg-white w-full">
    <div class="flex">
      <!--logo responsive -->
      <img :src="logo" class="m-auto lg:flex hidden w-32" />
      <img :src="logoResponsive" class="w-52 lg:hidden flex p-2" />
      <!--DONATE button responsive -->
      <button
        class="bg-red-600 h-8 w-20 mt-5 ml-4 lg:hidden text-white font-bold"
      >
        DONATE
      </button>

      <div class="flex justify-evenly">
        <!--menu responsive -->
        <button
          @click="showMenu = !showMenu"
          type="button"
          class="lg:hidden mx-8"
        >
          <menu-hero></menu-hero>
        </button>

        <div
          :class="{
            '  h-screen absolute w-[43.2rem]    bg-white  ': showMenu,
            'hidden lg:flex lg:flex-col ': !showMenu,
          }"
        >
          <div class="lg:flex block mt-4">
            <!--close hero for menu responsive -->
            <button @click="showMenu = false" v-if="showMenu" class="lg:hidden">
              <close-hero></close-hero>
            </button>
          </div>
          <div class="flex text-lg flex-col-reverse lg:flex-col">
            <div class="flex flex-col lg:flex-row">
              <!-- menu part one -->
              <div
                v-for="(page, index) in pages"
                :key="index"
                class="font-serif font-semibold lg:p-2.5"
              >
                <div
                  v-if="!page.sub && page.hide"
                  :class="{ 'lg:hidden  ': hideOnScroll }"
                  class="border-b-2 lg:border-b-0"
                >
                  <span class="font-normal p-4">{{ page.label }}</span>
                </div>
                <!-- sub menu for About us -->
                <sub-menu
                  v-if="page.hide"
                  :index="index"
                  :pages="page"
                  :class="{ 'lg:hidden  ': hideOnScroll }"
                >
                </sub-menu>
              </div>

              <div v-if="!hideOnScroll">
                <!--DONATE And Search hero -->
                <div class="lg:flex block">
                  <div class="mx-8 mt-2">
                    <search-hero
                      class="h-6 lg:flex hidden"
                      @click="searchBox = !searchBox"
                    ></search-hero>
                  </div>
                  <button
                    class="bg-red-600 w-24 p-2 lg:block hidden text-white font-bold"
                  >
                    DONATE
                  </button>
                </div>
              </div>
            </div>

            <div class="flex flex-col lg:flex-row">
              <div
                v-for="(page, index) in pages"
                :key="index"
                class="font-serif font-semibold lg:p-2.5 border-b-2 lg:border-b-0 ml-2 lg:ml-0"
              >
                <span
                  v-if="!page.sub && !page.hide"
                  :class="{ 'lg:hidden  ': hideOnScroll }"
                  class="font-normal"
                >
                </span>
                <!-- sub menu for menu part tow -->
                <sub-menu v-if="!page.hide" :index="index" :pages="page">
                </sub-menu>
              </div>
            </div>
          </div>
          <!-- search bar responsive -->
          <search-bar v-if="searchBox" class="mt-2 lg:flex"></search-bar>
          <search-bar class="mt-2 lg:hidden"></search-bar>
        </div>
      </div>
    </div>
  </div>
</template>
