<script lang="ts">
import { defineComponent, ref } from "vue";
import arrowHover from "./arrow-hover.vue";
import ArrowRightHero from "./arrow-right-hero.vue";
import LinkIcon from "./link-icon.vue";
let showMenu = ref(false);
export default defineComponent({
  components: { arrowHover, ArrowRightHero, LinkIcon },
  setup() {
    return { showMenu };
  },
});
</script>
<template>
  <button @mouseover="showMenu = true" @mouseleave="showMenu = false">
    <a class="flex hover:border-b-2 border-red-600">
      IASLC News <arrow-hover class="w-4 lg:hidden"></arrow-hover>
    </a>
    <ul
      :class="{
        'flex flex-col bg-white   absolute  items-start  text-black': showMenu,
        'hidden ': !showMenu,
      }"
    >
      <li class="px-5 py-3 mt-4 hover:border-b-2 border-red-600 text-3xl flex">
        IASLC News <arrow-right-hero></arrow-right-hero>
      </li>
      <hr class="text-blue-800 w-80 ml-5" />
      <li class="px-5 py-3 hover:border-b-2 border-red-600 flex">
        Search ILCN <link-icon class="ml-2 w-5 h-5 text-red-600"></link-icon>
      </li>
      <li class="px-5 py-3 hover:border-b-2 border-red-600 flex">
        WCLC 2022 News <link-icon class="ml-2 w-5 h-5 text-red-600"></link-icon>
      </li>
      <li class="px-5 py-3 hover:border-b-2 border-red-600">Press Releases</li>
      <li class="px-5 py-3 hover:border-b-2 border-red-600">
        ILCN Editorial Group
      </li>
      <li class="px-5 py-3 hover:border-b-2 border-red-600">
        Lung Cancer Considered Podcast
      </li>
      <li class="px-5 py-3 hover:border-b-2 border-red-600">
        Communications Committee
      </li>
      <li class="px-5 py-3 hover:border-b-2 border-red-600">
        ILCN Multidisciplinary Forum Theater
      </li>
    </ul>
  </button>
</template>
