<template>
  <base-navigator></base-navigator>
  <div
    class="bg-contain h-screen lg:bg-cover bg-fixed bg-no-repeat"
    :style="{ 'background-image': `url(${headerImg})` }"
  ></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import headerImg from "../assets/img-header.jpg";
import BaseNavigator from "./base-navigator.vue";
export default defineComponent({
  components: {
    BaseNavigator,
  },
  setup() {
    return { headerImg };
  },
});
</script>
