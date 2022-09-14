<template>
  <BaseNavigator></BaseNavigator>
  <div
    class="h-screen bg-center bg-cover w-full bg-fixed bg-no-repeat"
    :style="{ 'background-image': `url(${wordImg})` }"
  ></div>
  <div
    class="w-full flex px-3 flex-col bg-blue-800 lg:px-4 font-bold text-white"
  >
    <div
      class="mx-auto -mt-24 lg:-mt-32 flex lg:h-60 h-44 lg:min-w-[28rem] w-60 flex-col items-center justify-center bg-white text-center font-serif text-2xl lg:text-4xl tracking-wider text-black"
    >
      <span>ANNUAL REPORT</span>
      <hr class="mt-1 h-[0.1rem] w-24 bg-red-700" />

      <span>2022</span>
    </div>
    <div class="flex lg:flex-row flex-col-reverse items-center py-5 mt-5">
      <div class="w-max mr-8 lg:mt-0 mt-8">
        <h1 class="mb-3 text-3xl lg:text-5xl">Welcome Letter</h1>
        <hr class="mb-5 h-[0.1rem] w-32 bg-red-800" />
        <p class="text-base max-w-xs lg:max-w-xl w-max text-white leading-7">
          Dear Colleagues and Friends, Welcome to the 2021 IASLC Annual Report!
          As we look back on 2021, we see how our lives, our Association and the
          lung cancer community as a whole continued to be impacted by the
          pandemic. While we hoped that 2021 would bring us back together to
          meet in person, that was not to be. However, IASLC was able to produce
          extraordinary publications and education offerings within a virtual
          platform.
        </p>
        <button class="mt-7 bg-red-700 p-3 text-center uppercase">
          read the Welcome letter
        </button>
      </div>
      <div class="lg:flex ml-8 w-full lg:justify-between">
        <div class="lg:mt-10 mt-10 lg:mb-0 mb-5">
          <div class="ml-5 border-l-2 py-3 px-2 text-xl lg:block hidden">
            KRISTIN RICHEIMER
          </div>
          <img :src="iaslckrImg" alt="iaslckr" class="h-96 lg:h-80 lg:w-64" />
          <div class="ml-5 border-l-2 py-3 px-2 text-xl lg:hidden">
            KRISTIN RICHEIMER
          </div>
        </div>
        <div class="">
          <img :src="doctorImg" alt="iaslckr" class="h-96 lg:h-80 lg:w-64" />
          <div class="ml-5 mt-4 border-l-2 px-2 text-xl">
            HEATHER WAKELEE
            <div>,MD</div>
          </div>
        </div>
      </div>
    </div>

    <!-- popup -->
    <div class="lg:flex items-center leading-10 justify-around font-serif">
      <youtube-video @on-video-click="videoClicked"></youtube-video>
      <base-popup v-if="showPopup" @on-close-popup="closePopup">
        <template #content>
          <iframe
            class="h-[28rem] w-full rounded-lg"
            src="https://www.youtube.com/embed/Ju82sFVclJA"
          >
          </iframe>
        </template>
      </base-popup>
      <div class="leading-6 font-sans">
        <div class="lg:text-2xl text-xl mb-5">IASLC YEAR IN REVIEW</div>
        <div class="lg:mb-5 lg:max-w-xl max-w-xs">
          Dr. Heather Wakelee welcomes you to the IASLC 2021 Annual Report.
        </div>
        <button class="bg-red-700 p-2 mb-8 lg:mt-1 mt-6 font-sans">
          READ THE REPORT
        </button>
      </div>
    </div>
  </div>
  <!--  -->
  <div
    class="text-center m-auto max-w-xs lg:max-w-xl lg:font-serif text-2xl text-black my-10"
  >
    <div>IASLC'S INTERNATIONAL AND</div>
    <div>MULTIDISCIPLINARY MEMBERSHIP</div>

    <hr class="m-auto mt-3 w-32 border border-red-800 bg-red-900" />
  </div>
  <p class="text-center italic m-auto lg:max-w-6xl font-serif leading-7">
    Despite the worldwide focus on COVID-19, IASLC members from all corners of
    the world continued to drive scientific advancements and collaboration.
    IASLC members worked in incredibly difficult circumstances during the
    pandemic. Furthering the mission of the IASLC, members were supported in
    these global efforts by receiving discounted registration fees to meetings
    and educational events, complimentary access to the Journal of Thoracic
    Oncology and discounted publication fees for the open-access IASLC Journal,
    JTO Clinical and Research Reports. (JTO CRR)
  </p>
  <button
    class="m-auto mt-5 mb-5 flex bg-red-600 py-2 px-3 text-center text-white"
  >
    READ MORE
  </button>
  <h1
    class="mt-4 text-center font-serif text-2xl max-w-xs lg:max-w-lg m-auto text-black"
  >
    MEMBERS BY COUNTRY/REGION
  </h1>
  <div class="justify-center flex mt-8 mb-8"><CreateMap></CreateMap></div>

  <base-slider-commites></base-slider-commites>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import wordImg from "../assets/word.jpg";
import doctorImg from "../assets/doctor.jpg";
import iaslckrImg from "../assets/iaslckr.jpg";
import BasePopup from "./base-popup.vue";
import YoutubeVideo from "./youtube-video.vue";
import BaseNavigator from "./base-navigator.vue";

import CreateMap from "./create-map.vue";
import BaseSliderCommites from "./base-slider-commites.vue";

export default defineComponent({
  components: {
    BasePopup,
    YoutubeVideo,
    BaseNavigator,
    CreateMap,
    BaseSliderCommites,
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
