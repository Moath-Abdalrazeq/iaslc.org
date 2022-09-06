<script lang="ts">
import { defineComponent, ref } from "vue";
import arrowHover from "./arrow-hover.vue";
import ArrowRightHero from "./arrow-right-hero.vue";
let showMenu = ref(false);
export default defineComponent({
  components: { arrowHover, ArrowRightHero },
  setup() {
    return { showMenu };
  },
});
</script>
<template>
  <button @mouseover="showMenu = true" @mouseleave="showMenu = false">
    <a class="flex hover:border-b-2 border-red-600">
      Patient Advocacy <arrow-hover class="w-4 lg:hidden"></arrow-hover>
    </a>
    <ul
      :class="{
        'flex flex-col bg-white   absolute  items-start  text-black': showMenu,
        'hidden ': !showMenu,
      }"
    >
      <li class="px-5 py-3 hover:border-b-2 mt-4 border-red-600 text-3xl flex">
        Patient Advocacy <arrow-right-hero></arrow-right-hero>
      </li>
      <hr class="text-blue-800 w-80 ml-5" />
      <li class="px-5 py-3 hover:border-b-2 border-red-600">
        Cancer Care Team Award
      </li>
      <li class="px-5 py-3 hover:border-b-2 border-red-600">STARS</li>
      <li class="px-5 py-3 hover:border-b-2 border-red-600">
        STARS Participants
      </li>
      <li class="px-5 py-3 hover:border-b-2 border-red-600">Advocacy Awards</li>
      <li class="px-5 py-3 hover:border-b-2 border-red-600">
        Advocacy Partner Spotlight
      </li>
      <li class="px-5 py-3 hover:border-b-2 border-red-600">
        Patient Advocates Committee
      </li>
      <li class="px-5 py-3 hover:border-b-2 border-red-600">
        Patient Advocate Spotlight
      </li>
    </ul>
  </button>
</template>
