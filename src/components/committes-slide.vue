<template>
  <div class="lg:w-96 lg:text-sm ml-3 lg:ml-0 mr-2 lg:mr-0">
    <button @click="videoClick" class="relative">
      <img :src="slidData.firstImg" class="lg:h-56 object-cover" />
      <h1
        class="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <img :src="youtubeIcon" class="w-16" />
      </h1>
    </button>
    <div class="text-black font-bold text-2xl my-3">
      {{ slidData.title }}
    </div>

    <div class="text-black lg:text-lg text-base">
      {{ slidData.desc }}
    </div>
  </div>
  <div
    class="text-red-500 lg:text-lg text-xs flex justify-end mt-4 mb-2 hover:translate-x-2 lg:mr-0 mr-4"
  >
    Read More
    <span> <NextHeroicon></NextHeroicon> </span>
  </div>
  <base-popup v-if="showPopup" @on-close-popup="closePopup">
    <template #content>
      <iframe class="h-[28rem] w-full rounded-lg" :src="slidData.video">
      </iframe>
    </template>
  </base-popup>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import NextHeroicon from "./next-heroicon.vue";
import youtubeIcon from "../assets/YouTube.jpg";
import BasePopup from "./base-popup.vue";

export default defineComponent({
  components: { NextHeroicon, BasePopup },
  props: {
    slidData: { type: Object, required: true },
  },

  setup(props) {
    let showPopup = ref(false);
    function closePopup(close: boolean) {
      showPopup.value = close;
    }
    function videoClick() {
      showPopup.value = !showPopup.value;
    }
    return { videoClick, youtubeIcon, closePopup, showPopup };
  },
});
</script>
