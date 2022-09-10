<template>
  <div class="flex lg:justify-center">
    <div class="flex mb-4">
      <input
        type="text"
        class="px-4 py-2 w-96 text-black font-bold border-b-2 border-b-red-600"
        placeholder="Type to Search... "
        v-autofocus
      />
      <button
        class="px-4 text-white bg-red-600 border-l uppercase font-bold lg:block hidden"
      >
        Search
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import searchHero from "./search-hero.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: { searchHero },
  setup() {
    let searchButton = ref(false);
    return { searchButton };
  },
  directives: {
    autofocus: {
      mounted(el) {
        el.focus();
      },
    },
  },
});
</script>
