<template>
  <div>
    <div class="flex justify-center">
      <div v-for="(data, index) in tempData" :key="index">
        <img :src="data.imge" class="h-10 px-8" />
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
      {
        imge: imgOne,
      },
      {
        imge: imgTow,
      },
      {
        imge: imgThree,
      },
      {
        imge: imgFour,
      },
      {
        imge: imgFive,
      },
      {
        imge: imgSex,
      },
      {
        imge: imgSeven,
      },
      {
        imge: imgNine,
      },
      {
        imge: imgTen,
      },
      {
        imge: imgEleven,
      },
      {
        imge: imgTwelve,
      },
    ]);
    let currentSlide = ref(6);
    let tempIndex = ref(0);
    let tempData = ref([]);
    let imgeData = ref(images);

    setInterval(timeOut, 1000);
    function timeOut() {
      if (imgeData.value.length - 1 >= currentSlide.value) {
        currentSlide.value = currentSlide.value + 1;
        tempIndex.value = tempIndex.value + 1;

        initSlids();
      } else {
        console.log(tempData.value.splice(0, 2));
      }
    }
    function initSlids() {
      tempData.value = [];
      for (let i = tempIndex.value; i < imgeData.value.length; i++) {
        if (i < currentSlide.value) {
          tempData.value.push(imgeData.value[i]);
        }
      }
    }

    function prev() {
      if (tempIndex.value > 0) {
        currentSlide.value = currentSlide.value - 1;
        tempIndex.value = tempIndex.value - 1;

        initSlids();
      }
    }
    function next() {
      if (imgeData.value.length - 1 >= currentSlide.value) {
        currentSlide.value = currentSlide.value + 1;
        tempIndex.value = tempIndex.value + 1;

        initSlids();
      }
    }
    function init() {
      initSlids();
    }
    onMounted(init);

    return { images, next, prev, tempData };
  },
});
</script>
