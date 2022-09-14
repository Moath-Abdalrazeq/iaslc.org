<script lang="ts">
import { defineComponent } from "vue";
import LinkIcon from "./link-icon.vue";

export default defineComponent({
  components: { LinkIcon },
  props: { desc: { type: Array, required: true } },
  setup() {
    return {};
  },
});
</script>
<template>
  <div class="bg-white h-full">
    <div class="flex flex-col p-4 bg-gray-100 w-[22rem] -mt-1">
      <div
        v-for="(item, index) in desc"
        :key="index"
        class="mt-4 text-sm font-normal"
      >
        <a :href="item.code" class="hover:text-red-500">{{ item.text }}</a>
      </div>
    </div>
  </div>
</template>
