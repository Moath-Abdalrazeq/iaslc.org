<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {},

  setup() {
    let cardsData = ref([
      {
        title: "Featured & E-Posters / Posters",
        number: "530",
      },
      {
        title: "Invited Session Chairs",
        number: "85",
      },
      {
        title: "Plenary Speakers",
        number: "26",
      },
      {
        title: "Discussants",
        number: "29",
      },
    ]);

    return {
      cardsData,
    };
  },
});
</script>

<template>
  <h1 class="text-black flex justify-center text-3xl font-medium pt-5 pb-10">
    WCLC 2021 QUICK FACTS
  </h1>

  <div
    class="text-black lg:flex justify-evenly grid grid-cols-2 gap-4 lg:gap-0 ml-2"
  >
    <div v-for="(data, index) in cardsData" :key="index">
      <div class="p-6 bg-white rounded-lg shadow-lg lg:h-60 lg:w-72 h-44 w-44">
        <div
          class="mb-2 lg:text-6xl text-3xl font-bold text-red-700 flex justify-center lg:mt-8"
        >
          {{ data.number }}
        </div>
        <div class="text-black flex justify-center px-2 lg:text-xl text-center">
          {{ data.title }}
        </div>
      </div>
    </div>
  </div>
</template>
