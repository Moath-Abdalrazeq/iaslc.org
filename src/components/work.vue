<script lang="ts">
import { defineComponent } from "vue";
import FormSevice, { formTypeWork } from "../services/forms-service";

export default defineComponent({
  setup() {
    const formSevice = FormSevice;
    let formWork = formSevice.getFormWork();
    return { formWork };
  },
});
</script>
<template>
  {{ formWork }}
</template>
