<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { data } from "../services/menu-service";
import BaseMenu from "./base-menu.vue";
export default defineComponent({
  components: {
    BaseMenu,
  },
  setup() {
    let hideOnScroll = ref(false);
    function OnScroll() {
      if (window.pageYOffset > 200) {
        for (let i = 0; i < data.length; i++) {
          if (data[i].hide) {
            hideOnScroll.value = true;
          }
        }
      } else {
        hideOnScroll.value = false;
      }
    }
    window.onscroll = OnScroll;

    return { hideOnScroll };
  },
});
</script>
<template>
  <base-menu :hideOnScroll="hideOnScroll"> </base-menu>
</template>
