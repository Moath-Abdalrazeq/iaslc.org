<template>
  <div class="ml-8">
    <div
      class="w-11/12 mt-4 bg-no-repeat h-screen"
      :style="{ 'background-image': `url(${airPollution})` }"
    >
      <div class="flex justify-end py-10 mt-8">
        <div
          class="p-8 mt-4 max-w-lg bg-white rounded-lg border border-gray-200 shadow-md flex flex-col"
        >
          <p
            class="font-bold text-3xl mt-4 inline-flex items-center text-black"
          >
            AIR POLLUTION AND LUNG CANCER - THE IASLC POSITION STATEMENT
          </p>
          <p class="font-bold mt-4 inline-flex items-center text-black">
            Lung cancer is a complicated disease with many causes. Among them
            are tobacco smoke, radon, and asbestos. However, one largely
            overlooked cause is the relationship between air pollution and lung
            cancer.
          </p>
          <p
            class="justify-end text-xs mt-8 inline-flex items-center text-black"
          ></p>
          <button class="bg-red-700 text-white mt-4 p-2 w-48">
            Read THE STATEMENT
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import airPollution from "../assets/AIR-POLLUTION.jpg";
import arrowRightHero from "./arrow-right-hero.vue";
export default defineComponent({
  components: { arrowRightHero },
  setup() {
    return { airPollution };
  },
});
</script>
