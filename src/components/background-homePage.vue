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
    let imgeToView = ref(headerImg);
    let titleToView = ref(imgeData.value[0].title);
    let descToView = ref(imgeData.value[0].desc);
    let buttonToView = ref(imgeData.value[0].button);
    let i = ref(1);
    function timeOut() {
      imgeToView.value = imgeData.value[i.value].imge;
      titleToView.value = imgeData.value[i.value].title;
      descToView.value = imgeData.value[i.value].desc;
      buttonToView.value = imgeData.value[i.value].button;

      if (i.value < imgeData.value.length - 1) {
        i.value++;
      } else {
        i.value = 0;
      }
    }
    function titleClicked(index: number) {
      i.value = index;
      imgeToView.value = imgeData.value[i.value].imge;
      titleToView.value = imgeData.value[i.value].title;
      descToView.value = imgeData.value[i.value].desc;
      buttonToView.value = imgeData.value[i.value].button;
    }
    function init() {
      setInterval(timeOut, 4000);
    }
    onMounted(init);
    return {
      titleToView,
      imgeToView,
      descToView,
      imgeData,
      titleClicked,
      buttonToView,
      i,
    };
  },
});
</script>

<template>
  <div>
    <div
      class="bg-contain h-screen lg:bg-cover bg-fixed bg-no-repeat"
      :style="{ 'background-image': `url(${imgeToView})` }"
    >
      {{ imgeToView }}
      <div class="ml-10 flex h-full max-w-3xl">
        <div class="w-full mt-auto text-white font-bold">
          <div class="text-5xl">{{ titleToView }}</div>
          <div class="text-xl my-8">{{ descToView }}</div>
          <div class="text-xl mb-5">
            <button class="bg-red-700 p-2">{{ buttonToView }}</button>
          </div>
          <div class="flex mb-8">
            <div v-for="(data, index) in imgeData" :key="index">
              <button @click="titleClicked(index)" class="flex">
                <div
                  :class="{ 'text-red-600': i === index }"
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
