<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {},
  props: { subData: { type: Object, required: true } },
  setup(props) {
    return {};
  },
});
</script>
<template>
  <div>{{ subData.name }}</div>
</template>
