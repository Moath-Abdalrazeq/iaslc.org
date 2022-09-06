<script lang="ts">
import { defineComponent, ref } from "vue";
import SubMenu from "./sub-menu.vue";

export default defineComponent({
  components: { SubMenu },
  props: {
    menuData: { type: Object, required: true },
    nameClicked: { type: Boolean, required: true },
    currentIndex: { type: Number, required: true },
  },
  setup(props) {
    let showMenu = ref(false);
    let currentIndex = ref(-1);
    function nameHover(index: number) {
      showMenu.value = !showMenu.value;
      currentIndex.value = index;
    }

    return { showMenu, nameHover, currentIndex };
  },
});
</script>
<template>
  <div v-for="(item, index) in menuData.sub" :key="index">
    <button>
      <sub-menu v-if="nameClicked" :sub-data="item"> </sub-menu>
    </button>
  </div>
</template>
