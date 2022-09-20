<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    let financialsData = ref([
      {
        tr: "Program Revenues",
        td: "$12,78,644	",
        td2: "$7,148,662",
      },
      {
        tr: "Membership Revenues",
        td: "$744,497	",
        td2: "$632,870",
      },
      {
        tr: "Other Revenues",
        td: "$927,858",
        td2: "--",
      },
      {
        tr: "Total Revenues",
        td: "$14,465,999	",
        td2: "$7,781,532",
      },
      {
        tr: "",
        td: "",
        td2: "",
      },
      {
        tr: "Direct Program Expenses",
        td: "$7,582,308	",
        td2: "$4,584,120",
      },
      {
        tr: "G&A Expenses",
        td: "$5,115,252",
        td2: "$5,520,532",
      },
      {
        tr: "Total Expenses",
        td: "$12,697,560",
        td2: "$10,104,652",
      },
      {
        tr: "",
        td: "",
        td2: "",
      },
      {
        tr: "Operating Surplus(Deficit)",
        td: "$1,759,439",
        td2: "($2,323,120)",
      },
      {
        tr: "",
        td: "",
        td2: "",
      },
      {
        tr: "Other Income/Expense",
        td: "$950,000",
        td2: "$65,296",
      },
    ]);
    return {
      financialsData,
    };
  },
});
</script>

<template>
  <div class="mt-10">
    <div class="text-4xl text-center font-bold">FINANCIALS</div>
    <hr class="m-auto my-4 h-[0.16rem] bg-red-700 w-32" />
  </div>
  <div class="container px-10 mx-auto">
    <div class="overflow-x-auto">
      <table class="min-w-full">
        <caption class="py-4 text-gray-500 bg-slate-300 font-bold">
          December 31 (Unaudited)
        </caption>
        <thead class="border-b font-medium text-center">
          <th class="py-4">&nbsp;</th>
          <th>2021</th>
          <th>2020</th>
        </thead>
        <tbody>
          <tr
            v-for="(data, index) in financialsData"
            :key="index"
            class="border-b"
          >
            <td class="py-4 px-6 font-bold">{{ data.tr }}</td>
            <td>{{ data.td }}</td>
            <td>{{ data.td2 }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="my-10">
      <button
        class="py-2 px-3 text-base font-medium text-white bg-red-700 uppercase"
      >
        Read more
      </button>
    </div>
  </div>
</template>
