<template>
  <searchHero @click="searchButton = !searchButton" class="h-8"></searchHero>

  <div v-if="searchButton" class="flex items-center justify-center">
    <div class="flex mb-4 rounded">
      <input
        type="text"
        class="px-4 py-2 w-96 text-black"
        placeholder="Type to Search..."
        v-autofocus
      />
      <button class="px-4 text-white bg-gray-600 border-l">Search</button>
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
