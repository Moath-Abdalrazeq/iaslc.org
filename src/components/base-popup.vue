<template>
  <div class="fixed inset-0 z-30 overflow-y-auto">
    <div
      class="flex min-h-screen items-center justify-center text-center sm:block sm:items-end"
    >
      <div
        class="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
      ></div>

      <span
        class="sm:inline-block sm:h-screen sm:align-middle"
        aria-hidden="true"
      ></span>
      <div class="inline-block w-full max-w-4xl transform align-middle">
        <div class="absolute right-0 flex">
          <button
            @click="closePopup"
            class="mt-1 mr-1 h-6 w-6 rounded-full bg-gray-300 px-1 pb-6 text-gray-800 opacity-50"
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
