<template>
  <div class="max-w-lg">
    <div class="text-start">
      <div class="mb-2 text-lg">{{ card.title }}</div>
      <div class="">{{ card.decs }}</div>
      <div class="flex justify-end hover:translate-x-2 mt-2 text-red-600 px-2">
        Read more
        <span class="px-1"><NextHeroicon></NextHeroicon></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NextHeroicon from "./next-heroicon.vue";

export default defineComponent({
  components: { NextHeroicon },

  props: {
    card: { type: Object, required: true },
  },
  setup() {
    return {};
  },
});
</script>
