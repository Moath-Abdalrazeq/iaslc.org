<script lang="ts">
import { defineComponent } from "vue";
import logoIaslc from "../assets/iaslc.logo.png";
import languageSelection from "./language-selection.vue";
import SearchBar from "./search-bar.vue";
import AboutUs from "./about-us.vue";
export default defineComponent({
  components: { languageSelection, SearchBar, AboutUs },
  setup() {
    return { logoIaslc };
  },
});
</script>

<template>
  <div
    class="lg:justify-end lg:flex mb-4 mr-4 border-b-2 hover:border-orange-500 mt-4"
  >
    <language-selection></language-selection>
  </div>
  <!-- menu -->

  <div class="lg:justify-end lg:flex lg:items-center">
    <a> <about-us></about-us></a>
    <a href="#" class="px-5 hover:text-red-600">Contact</a>
    <a href="#" class="px-5 hover:text-red-600">Careers</a>
    <a href="#" class="px-5 hover:text-red-600">Corporate Relations</a>
    <a href="#" class="px-5 hover:text-red-600">Annual Report</a>
    <div class="px-5"><search-bar></search-bar></div>
    <div class="px-5">
      <button class="bg-red-600 p-2 w-28 text-white font-bold lg:flex hidden">
        DONATE
      </button>
    </div>
  </div>
</template>
