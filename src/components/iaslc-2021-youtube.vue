<template>
  <button @click="videoClick">
    <img :src="iaslc2021World" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import iaslc2021World from "../assets/iaslc-2021-world.png";
export default defineComponent({
  emits: ["onVideoClick"],
  setup(props, { emit }) {
    function videoClick() {
      emit("onVideoClick");
    }
    return { videoClick, iaslc2021World };
  },
});
</script>
