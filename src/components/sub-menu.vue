<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {},
  props: {
    index: { type: Number, required: true },
    pages: { type: Object, required: true },
  },
  setup(props) {
    return {};
  },
});
</script>
<template>
  <button v-if="pages.sub" class="group">
    {{ pages.label }}
    <div class="hidden group-hover:block absolute top-15">
      <div
        v-for="(page, index) in pages.sub"
        :key="index"
        class="bg-white px-5 py-3 flex hover:border-b-2 hover:border-b-red-600"
      >
        <div>{{ page.label }}</div>
      </div>
    </div>
  </button>
</template>
