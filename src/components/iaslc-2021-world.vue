<template>
  <div class="flex flex-col-reverse lg:flex-row my-8 lg:px-8">
    <div
      class="bg-white -mt-14 lg:mt-0 lg:max-w-lg max-w-xs mx-auto shadow-lg px-5 lg:px-10 py-5 lg:py-0"
    >
      <h1 class="font-medium text-3xl">
        IASLC 2021 WORLD CONFERENCE ON LUNG CANCER
      </h1>

      <h1 class="text-base font-serif py-3">
        The IASLC made an early decision to execute the 2021 World Conference on
        Lung Cancer (WCLC 2021) as a fully virtual event. The WCLC Conference
        Chairs, Drs. David Harpole, Thomas Stinchcombe, and Kristin Higgins
        continued the IASLC’s tradition of delivering high-quality educational
        programs marked by practice-changing abstracts.
      </h1>
      <button class="bg-red-700 p-3 shadow-2xl text-white font-bold uppercase">
        Read more
      </button>
    </div>
    <div class="px-4 lg:px-0">
      <Iaslc2021Youtube @on-video-click="videoClicked"></Iaslc2021Youtube>
    </div>
  </div>
  <base-popup v-if="showPopup" @on-close-popup="closePopup">
    <template #content>
      <iframe
        class="h-[28rem] w-full rounded-lg"
        src="https://www.youtube.com/embed/EqHsg4q3ZC4"
      >
      </iframe>
    </template>
  </base-popup>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import wordImg from "../assets/word.jpg";
import doctorImg from "../assets/doctor.jpg";
import iaslckrImg from "../assets/iaslckr.jpg";
import BasePopup from "./base-popup.vue";
import YoutubeVideo from "./youtube-video.vue";
import Iaslc2021Youtube from "./iaslc-2021-youtube.vue";

export default defineComponent({
  components: {
    BasePopup,
    YoutubeVideo,
    Iaslc2021Youtube,
  },
  setup() {
    let showPopup = ref(false);
    function videoClicked() {
      showPopup.value = true;
    }
    function closePopup(close: boolean) {
      showPopup.value = close;
    }
    return {
      wordImg,
      doctorImg,
      iaslckrImg,
      videoClicked,
      showPopup,
      closePopup,
    };
  },
});
</script>
