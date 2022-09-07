<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { dataMenu } from "../services/menu-service";

import BaseMenu from "./base-menu.vue";

export default defineComponent({
  components: {
    BaseMenu,
  },
  setup() {
    let hideOnScroll = ref(false);
    function OnScroll() {
      if (window.pageYOffset > 200) {
        //   let elm = document.getElementById("ScrollHeaderId");
        //   if (elm) {
        //     elm.className = " hidden   ";
        //   }
        // } else {
        //   let elm = document.getElementById("ScrollHeaderId");
        //   if (elm) {
        //     elm.className = "";
        //   }

        for (let i = 0; i < dataMenu.length; i++) {
          if (dataMenu[i].hide) {
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
  <!-- logo -->

  <base-menu :hideOnScroll="hideOnScroll"> </base-menu>
</template>
