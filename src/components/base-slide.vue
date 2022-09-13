<template>
  <div class="lg:w-96 lg:text-sm w-36">
    <div @click="videoClick" class="relative cursor-pointer">
      <img
        :src="slidData.firstImg"
        class="object-contain lg:h-56 lg:object-cover"
      />
      <h1
        class="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <img :src="youtubeIcon" class="w-16" />
      </h1>
    </div>
    <div class="text-black font-bold text-2xl my-3">
      {{ slidData.title }}
    </div>

    <div class="text-black lg:text-lg text-xs">{{ slidData.desc }}</div>
  </div>
  <div
    class="text-red-500 lg:text-lg text-xs flex justify-end mt-4 mb-2 hover:translate-x-2"
  >
    {{ slidData.link }}
    <span> <NextHeroicon></NextHeroicon> </span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NextHeroicon from "./next-heroicon.vue";
import youtubeIcon from "../assets/YouTube.jpg";
import CommittesSlide from "./committes-slide.vue";
export default defineComponent({
  components: { NextHeroicon, CommittesSlide },
  props: {
    slidData: { type: Object, required: true },
  },
  emits: ["onVideoClick"],
  setup(props, { emit }) {
    function videoClick() {
      emit("onVideoClick");
    }
    return { videoClick, youtubeIcon };
  },
});
</script>
