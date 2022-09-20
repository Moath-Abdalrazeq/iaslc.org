<template>
  <div class="my-5">
    <span class="flex justify-center text-4xl font-bold">FINANCIALS</span>
    <hr class="m-auto h-[0.14rem] w-32 bg-red-700 mt-4" />
  </div>
  <div class="container px-10 mx-auto">
    <div class="overflow-x-auto">
      <table class="min-w-full">
        <caption
          class="text-gray-600 text-end border-y-2 opacity-90 text-lg bg-gray-200 p-3"
        >
          <span class="lg:mr-20">December 31 (Unaudited)</span>
        </caption>
        <thead class="border-b h-10 font-serif text-center">
          <th></th>
          <th>
            <strong>2021</strong>
          </th>
          <th>
            <strong>2020</strong>
          </th>
        </thead>

        <tbody>
          <tr class="border-b-2" v-for="(input, index) in data" :key="index">
            <td class="py-4">{{ input.info }}</td>
            <td>{{ input.amount1 }}</td>
            <td>{{ input.amount2 }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="">
    <button class="bg-red-600 text-white p-2 mt-10">READE MORE</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    let data = ref([
      {
        info: "Program Revenues",
        amount1: "$12,78,644",
        amount2: "$7,148,662",
      },

      {
        info: "Membership Revenues",
        amount1: "$744,497",
        amount2: "$632,870",
      },

      {
        info: "Other Revenues",
        amount1: "$927,858",
        amount2: "--",
      },

      {
        info: "Total Revenues",
        amount1: "$14,465,999",
        amount2: "$7,781,532",
      },
      {
        info: "",
        amount1: "",
        amount2: "",
      },

      {
        info: "Direct Program Expenses",
        amount1: "$7,582,308",
        amount2: "$4,584,120",
      },

      {
        info: "G&A Expenses",
        amount1: "$5,115,252",
        amount2: "$5,520,532",
      },

      {
        info: "Total Expenses",
        amount1: "$12,697,560",
        amount2: "$10,104,652",
      },
      {
        info: "",
        amount1: "",
        amount2: "",
      },

      {
        info: "Operating Surplus(Deficit)",
        amount1: "$1,759,439",
        amount2: "($2,323,120)",
      },

      {
        info: "",
        amount1: "",
        amount2: "",
      },

      {
        info: "Other Income/Expense",
        amount1: "$950,000",
        amount2: "$65,296",
      },
    ]);
    return { data };
  },
});
</script>
