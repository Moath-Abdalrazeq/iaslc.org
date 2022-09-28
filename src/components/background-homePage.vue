<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import headerImg from "../assets/img-header.jpg";
import BaseNavigator from "./base-navigator.vue";
import iaslcAcademy from "@/assets/iaslc-academy.jpg";
import aclcReg from "@/assets/aclc-registration.jpg";
export default defineComponent({
  components: {
    BaseNavigator,
  },
  setup() {
    let imgeData = ref([
      {
        imge: headerImg,
        title: "Register for NACLC 2022",
        desc: "Register today for the IASLC 2022 North America Conference on Lung Cancer will take place September 23-25, 2022 at the Chicago Marriott Downtown Magnificent Mile. We invite you to join us either in person or virtually for this dynamic meeting, featuring up-to-date research on diverse topics.",
        button: "Register Today for NACLC",
      },
      {
        imge: iaslcAcademy,
        title: "Applications Open for the 2022-2023 IASLC Academy",
        desc: "The IASLC Academy is a professional development program for early-career physicians from around the world who are interested in pursuing an academic career in thoracic oncology. Deadline to apply: October 3, 2022.",
        button: "Learn More & Apply!",
      },
      {
        imge: aclcReg,
        title: "ACLC 2022 Registration Now Open!",
        desc: "The IASLC 2022 Asia Conference on Lung Cancer will take place October 27 – 29, 2022 in Nara, Japan. ACLC will highlight clinical research & management and multidisciplinary care from international leaders across the lung cancer field. Register Today!",
        button: "Register Now",
      },
    ]);
    let timeOutIndex = ref(1);
    function timeOut() {
      if (timeOutIndex.value < imgeData.value.length - 1) {
        timeOutIndex.value++;
      } else {
        timeOutIndex.value = 0;
      }
    }
    function titleClicked(index: number) {
      timeOutIndex.value = index;
    }
    function init() {
      setInterval(timeOut, 4000);
    }
    onMounted(init);
    return {
      imgeData,
      titleClicked,
      timeOutIndex,
    };
  },
});
</script>
<template>
  <div v-for="(item, index) in imgeData" :key="index">
    <div
      v-if="index === timeOutIndex"
      class="bg-contain h-screen lg:bg-cover bg-fixed bg-no-repeat"
      :style="{ 'background-image': `url(${item.imge})` }"
    >
      <div class="ml-10 flex h-full max-w-3xl">
        <div class="w-full mt-auto text-white font-bold">
          <div class="text-5xl">{{ item.title }}</div>
          <div class="text-xl my-8">{{ item.desc }}</div>
          <div class="text-xl mb-5">
            <button class="bg-red-700 p-2">{{ item.button }}</button>
          </div>
          <div class="flex mb-8">
            <div v-for="(data, index) in imgeData" :key="index">
              <button @click="titleClicked(index)" class="flex">
                <div
                  :class="{ 'text-red-600': timeOutIndex === index }"
                  class="text-4xl px-3"
                >
                  0{{ index + 1 }}
                </div>
                <div class="text-left text-xs w-44 font-serif">
                  {{ data.title }}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
