<template>
  <div>
    <div class="flex justify-center">
      <div v-for="(data, index) in tempData" :key="index">
        <img :src="data" class="h-10 px-8" />
      </div>
    </div>
    <div class="flex justify-end mr-6 items-end mt-8">
      <button @click="prev" class="bg-white shadow-lg w-10 h-10 mr-1">
        <previous-heroicon class="h-5 ml-2 text-red-500"></previous-heroicon>
      </button>
      <button @click="next" class="bg-white shadow-lg w-10 h-10">
        <next-heroicon class="h-5 ml-2 text-red-500"></next-heroicon>
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import previousHeroicon from "./previous-heroicon.vue";
import NextHeroicon from "./next-heroicon.vue";
import imgOne from "@/assets/settimeout/astrazeneca.png";
import imgTow from "@/assets/settimeout/amgen.jpg";
import imgThree from "@/assets/settimeout/bms_logo_rgb_pos_300.jpg";
import imgFour from "@/assets/settimeout/ds_logo_special.jpg";
import imgFive from "@/assets/settimeout/Genentech-Logo.wine_.png";
import imgSex from "@/assets/settimeout/Janssen.png";
import imgSeven from "@/assets/settimeout/jazz.png";
import imgNine from "@/assets/settimeout/lillyLogo2.png";
import imgTen from "@/assets/settimeout/Merck_Logo.png";
import imgEleven from "@/assets/settimeout/Novartis.png";
import imgTwelve from "@/assets/settimeout/Takeda.png";

export default defineComponent({
  components: { NextHeroicon, previousHeroicon },
  setup() {
    let images = ref([
      imgOne,
      imgTow,
      imgThree,
      imgFour,
      imgFive,
      imgSex,
      imgSeven,
      imgNine,
      imgTen,
      imgEleven,
      imgTwelve,
    ]);
    let currentSlide = ref(6);
    let tempIndex = ref(0);
    let tempData = ref([]);
    function initSlids() {
      tempData.value = [];
      for (let i = tempIndex.value; i < currentSlide.value; i++) {
        tempData.value.push(images.value[i]);
      }
    }
    function prev() {
      if (tempIndex.value > 0) {
        currentSlide.value -= 1;
        tempIndex.value -= 1;
        initSlids();
      }
    }
    function next() {
      if (images.value.length - 1 >= currentSlide.value) {
        currentSlide.value += 1;
        tempIndex.value += 1;
        initSlids();
      }
    }
    let timeIndex = 0;
    let tempSlide = images.value[timeIndex];
    function timeOut() {
      if (images.value.length - 1 >= currentSlide.value) {
        next();
      } else {
        if (images.value.length > timeIndex) {
          tempSlide = images.value[timeIndex];
          timeIndex++;
        } else {
          timeIndex = 0;
          tempSlide = images.value[timeIndex];
          timeIndex++;
        }

        tempData.value.splice(0, 1);
        tempData.value.push(tempSlide);
      }
    }
    function init() {
      initSlids();
      setInterval(timeOut, 1500);
    }
    onMounted(init);

    return { tempData, prev, next };
  },
});
</script>
