<script lang="ts">
import { defineComponent } from "vue";
import FormSevice, { formTypeFamily } from "../services/forms-service";

export default defineComponent({
  setup() {
    const formSevice = FormSevice;
    let formfamily = formSevice.getFormFamily();
    return { formfamily };
  },
  components: {},
});
</script>

<template>
  <div class="bg-gray-800 flex h-screen">
    <div
      class="m-auto flex items-center font-serif rounded-2xl bg-gray-200 text-gray-900 leading-10 font-bold w-96 h-4/5 text-xl border-8"
    >
      <div
        v-for="(data, index) in formfamily"
        :key="index"
        class="flex justify-center flex-col m-auto"
      >
        <div class="mb-5">Name : {{ data.fullName }}</div>
        <div class="mb-5">Address : {{ data.address }}</div>
        <div class="mb-5">City : {{ data.city }}</div>
        <div class="mb-5">Number Of Family : {{ data.NOFamily }}</div>
        <div class="mb-5">Number Of Male : {{ data.NOMale }}</div>
        <div class="mb-5">Number Of Female : {{ data.NOFemale }}</div>
      </div>
    </div>
  </div>
</template>
