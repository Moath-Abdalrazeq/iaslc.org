<template>
  <div>
    <ul class="lg:flex mb-6 mt-4 bg-blue-900 p-1.5 rounded-lg text-center">
      <li
        v-for="(tab, index) in tabsNames"
        :key="index"
        class="w-full px-4 py-1.5 rounded-lg"
      >
        <button @click="tabClicked(index)">
          <div
            :class="{
              'text-blue-800  bg-white rounded-lg  shadow-xl  w-40':
                timeOutIndex === index,
              'text-white': timeOutIndex !== index,
            }"
          >
            {{ tab }}
          </div>
        </button>
      </li>
    </ul>
    <div>
      <div>
        <slot name="tabPanel" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
export default defineComponent({
  props: {
    tabsNames: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  emits: ["onTabClick"],
  setup(props, { emit }) {
    let timeOutIndex = ref(0);
    let activeTab = ref(false);
    function tabClicked(index: number) {
      emit("onTabClick", index);
      timeOutIndex.value = index;
    }
    return {
      tabClicked,
      activeTab,
      timeOutIndex,
    };
  },
});
</script>
