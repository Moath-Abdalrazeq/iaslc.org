<template>
  <div
    class="h-screen bg-fixed bg-no-repeat lg:bg-cover"
    :style="{ 'background-image': `url(${wordImg})` }"
  ></div>

  <div class="flex flex-col bg-blue-800 px-4 font-bold text-white">
    <div
      class="mx-auto -mt-32 flex h-60 min-w-[28rem] flex-col items-center justify-center bg-white text-center font-serif text-4xl tracking-wider text-black"
    >
      <span>ANNUAL REPORT</span>
      <hr class="mt-1 h-[0.1rem] w-24 bg-red-700" />

      <span>2022</span>
    </div>
    <div class="flex justify-between">
      <div class="">
        <h1 class="mb-3 text-5xl">Welcome Letter</h1>
        <hr class="mb-5 h-[0.1rem] w-32 bg-red-800" />
        <div class="flex justify-around">
          <div class="">
            <pre class="text-base leading-7">
Dear Colleagues and Friends, Welcome to the 2021 IASLC Annual Report!
As we look back on 2021, we see how our lives, our Association and the
lung cancer community as a whole continued to be impacted by the
pandemic. While we hoped that 2021 would bring us back together to meet
in person, that was not to be. However, IASLC was able to produce
extraordinary publications and education offerings within a virtual 
platform.
</pre
            >
            <button class="mt-7 bg-red-600 p-3 text-center uppercase">
              read the Welcome letter
            </button>
          </div>
          <div class="ml-10">
            <div class="ml-5 border-l-2 py-3 px-2 text-xl">
              KRISTIN RICHEIMER
            </div>
            <img :src="iaslckrImg" alt="iaslckr" class="h-80 w-64" />
          </div>
        </div>
      </div>

      <div>
        <img :src="doctorImg" alt="iaslckr" class="h-80 w-64" />
        <div class="ml-5 mt-4 border-l-2 px-2 text-xl">
          HEATHER WAKELEE,
          <div>MD</div>
        </div>
      </div>
    </div>
    <!-- popup -->
    <div>
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
    </div>
  </div>
  <!--  -->
  <div class="text-center font-serif text-3xl text-black">
    IASLC'S INTERNATIONAL AND <br />
    MULTIDISCIPLINARY MEMBERSHIP
    <hr class="m-auto mt-3 mb-3 w-32 border border-red-800 bg-red-900" />
  </div>
  <p class="text-center font-serif">
    Despite the worldwide focus on COVID-19, IASLC members from all corners of
    the world continued to drive scientific advancements and collaboration.
    IASLC members worked in incredibly difficult circumstances during the
    pandemic. Furthering the mission of the IASLC, members were supported in
    these global efforts by receiving discounted registration fees to meetings
    and educational events, complimentary access to the Journal of Thoracic
    Oncology and discounted publication fees for the open-access IASLC Journal,
    JTO Clinical and Research Reports. (JTO CRR)
  </p>
  <button class="m-auto mt-6 flex bg-red-600 py-1 px-3 text-center text-white">
    READ MORE
  </button>
  <h1 class="mt-4 text-center font-serif text-2xl font-bold text-black">
    MEMBERS BY COUNTRY/REGION
  </h1>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import wordImg from "../assets/word.jpg";
import doctorImg from "../assets/doctor.jpg";
import iaslckrImg from "../assets/iaslckr.jpg";

import BasePopup from "./base-popup.vue";
import YoutubeVideo from "./youtube-video.vue";
export default defineComponent({
  components: { BasePopup, YoutubeVideo },
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
