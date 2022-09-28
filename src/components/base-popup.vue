<template>
  <div class="fixed inset-0 z-30 overflow-y-auto">
    <div class="flex justify-center items-center">
      <div class="fixed inset-0 bg-black bg-opacity-75"></div>

      <span class="h-screen"></span>
      <div
        class="inline-block w-full max-w-sm lg:max-w-4xl transform align-middle"
      >
        <div class="absolute right-0 flex">
          <button
            @click="closePopup"
            class="px-3 mt-1 mr-3 rounded-full bg-gray-300 text-black"
          >
            ×
          </button>
        </div>
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CloseHero from "./close-hero.vue";
export default defineComponent({
  emits: ["onClosePopup"],
  setup(props, { emit }) {
    function closePopup() {
      emit("onClosePopup", false);
    }
    return { closePopup };
  },
  components: { CloseHero },
});
</script>
