<template>
  <div class="ml-8">
    <p class="mt-8 font-bold text-3xl">IN FOCUS</p>
    <div
      class="w-11/12 mt-4 bg-no-repeat h-screen"
      :style="{ 'background-image': `url(${inFocus})` }"
    >
      <div class="flex justify-end">
        <div
          class="p-8 mt-4 max-w-lg bg-white rounded-lg border border-gray-200 shadow-md flex flex-col"
        >
          <p class="mb-3 text-red-600 text-xs">ILCN ARTICLE</p>
          <a
            href="#"
            class="font-bold text-3xl mt-4 inline-flex items-center text-black hover:text-red-600 text"
          >
            Alternative Dosing Strategies for Immune Checkpoint Inhibitors
          </a>
          <p class="font-bold mt-4 inline-flex items-center text-black">
            Combining fixed- and weight-based dosing approaches may reduce costs
            without compromising efficacy.
          </p>
          <p
            class="justify-end text-xs mt-8 inline-flex items-center text-black"
          >
            MAY 24, 2022
          </p>
          <a
            href="#"
            class="justify-end font-bold mt-4 inline-flex items-center text-red-600"
          >
            Read more
            <arrow-right-hero class="hover:translate-x-3"></arrow-right-hero>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import inFocus from "../assets/in-focus.jpg";
import arrowRightHero from "./arrow-right-hero.vue";
export default defineComponent({
  components: { arrowRightHero },
  setup() {
    return { inFocus };
  },
});
</script>
