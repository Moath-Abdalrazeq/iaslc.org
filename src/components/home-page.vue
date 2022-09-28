<template>
  <base-navigator></base-navigator>
  <div>
    <background-home-page></background-home-page>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import BaseNavigator from "./base-navigator.vue";
import BackgroundHomePage from "./background-homePage.vue";
export default defineComponent({
  components: {
    BaseNavigator,
    BackgroundHomePage,
  },
  setup() {
    return {};
  },
});
</script>
