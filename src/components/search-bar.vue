<template>
  <div class="flex lg:ml-4">
    <div class="flex mb-4">
      <input
        type="text"
        class="px-4 py-2 lg:w-[32rem] w-96 text-black font-bold lg:border-b-2 lg:border-b-red-600"
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
import { defineComponent, ref } from "vue";
import SearchHero from "./search-hero.vue";

export default defineComponent({
  components: { SearchHero },
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
