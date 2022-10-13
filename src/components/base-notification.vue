<template>
          <div class="  p-4   border rounded-md shadow-sm shadow-green-600 bg-white w-72   flex  justify-between">
            <slot name="content"></slot>
            <button
              @click="closePopup"
              class=" text-black"
            >
              ×
            </button>
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
  