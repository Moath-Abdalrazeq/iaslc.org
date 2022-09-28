<template>
  <div class="p-5 bg-red-500 lg:w-96 w-52 my-5">
    <button @click="videoClick">
      <div
        class="h-64 w-[22rem] bg-no-repeat lg:h-[28rem] lg:w-[34rem] bg-cover"
        :style="{ 'background-image': `url(${popupImg})` }"
      >
        <div class="flex h-full w-full">
          <img :src="youtubeImg" class="m-auto w-20 gl:w-20 hover:opacity-80" />
        </div>
      </div>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import popupImg from "../assets/popup.png";
import youtubeImg from "../assets/YouTube.jpg";
export default defineComponent({
  emits: ["onVideoClick"],
  setup(props, { emit }) {
    function videoClick() {
      emit("onVideoClick");
    }
    return { youtubeImg, popupImg, videoClick };
  },
});
</script>
