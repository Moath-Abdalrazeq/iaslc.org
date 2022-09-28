<script lang="ts">
import { computed, defineComponent, ref } from "vue";
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
import { useRouter } from "vue-router";
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
    const currentRoute = computed(() => {
      const router = useRouter();
      return router.currentRoute.value.name;
    });
    return { pages, logo, logoResponsive, showMenu, searchBox, currentRoute };
  },
});
</script>
<template>
  <div class="fixed bg-white w-full z-30">
    <div class="flex justify-around">
      <!--logo responsive -->
      <div>
        <router-link to="/" class="m-auto lg:flex hidden w-36"
          ><img :src="logo" />
        </router-link>
      </div>

      <img :src="logoResponsive" class="w-52 lg:hidden p-2" />
      <!--DONATE button responsive -->
      <button
        class="bg-red-700 h-8 w-20 lg:hidden mt-5 ml-4 font-semibold text-white uppercase text-base"
      >
        donate
      </button>

      <div class="flex justify-evenly lg:mt-7">
        <!--menu responsive -->
        <button
          @click="showMenu = !showMenu"
          type="button"
          class="lg:hidden mx-8"
        >
          <div v-if="!showMenu"><menu-hero></menu-hero></div>
          <button @click="showMenu = true" v-if="showMenu" class="lg:hidden">
            <close-hero v-if="showMenu"></close-hero>
          </button>
        </button>

        <div
          :class="{
            '  h-screen absolute right-0   lg:flex  w-full   top-16     bg-white  ':
              showMenu,
            'hidden lg:flex lg:flex-col   ': !showMenu,
          }"
        >
          <hr class="w-full lg:hidden" />
          <div class="flex text-lg flex-col-reverse lg:flex-col">
            <div class="flex flex-col lg:flex-row justify-end lg:mr-2 lg:mb-2">
              <!-- menu part one -->
              <div
                v-for="(page, index) in pages"
                :key="index"
                class="lg:mt-4 lg:mb-3 text-base lg:text-gray-500 font-medium"
              >
                <div
                  v-if="!page.sub && page.hide"
                  :class="{
                    'lg:hidden  ': hideOnScroll,
                  }"
                  class="lg:hover:text-red-600 lg:bg-inherit bg-gray-100 my-2 lg:my-0 mx-4 lg:mx-0 py-2 lg:py-0"
                >
                  <router-link
                    :to="page.code"
                    v-if="page.code === '/annualReport' || page.label"
                    class="lg:mx-4 ml-4 lg:ml-0"
                    exact
                  >
                    {{ page.label }}
                  </router-link>
                </div>

                <!-- sub menu for About us -->
                <div>
                  <sub-menu
                    v-if="page.hide"
                    :index="index"
                    :pages="page"
                    :class="{ 'lg:hidden  ': hideOnScroll }"
                    class="text-base hover:cursor-pointer lg:bg-inherit bg-gray-100 border-b-0 py-2 lg:py-0"
                  >
                  </sub-menu>
                </div>
              </div>
              <div v-if="!hideOnScroll">
                <!--DONATE And Search hero -->
                <div class="flex">
                  <button class="mx-4">
                    <search-hero
                      class="h-9 lg:flex hidden"
                      @click="searchBox = !searchBox"
                    ></search-hero>
                  </button>
                  <button
                    class="bg-red-700 w-24 px-4 py-2 lg:flex hidden font-semibold text-white uppercase text-base"
                  >
                    donate
                  </button>
                </div>
              </div>
            </div>
            <search-bar class="lg:hidden justify-center"></search-bar>

            <div
              class="flex flex-col lg:flex-row flex-wrap lg:hover:cursor-pointer"
            >
              <div
                v-for="(page, index) in pages"
                :key="index"
                class="font-semibold uppercase text-base"
              >
                <span
                  v-if="!page.sub && !page.hide"
                  :class="{ 'lg:hidden     ': hideOnScroll }"
                >
                </span>
                <!-- sub menu for menu part tow -->
                <sub-menu v-if="!page.hide" :index="index" :pages="page">
                </sub-menu>
              </div>
            </div>
          </div>
          <!-- search bar responsive -->
          <search-bar
            v-if="searchBox"
            class="flex justify-center mt-6"
          ></search-bar>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.router-link-active {
  @apply text-red-500;
}
</style>
