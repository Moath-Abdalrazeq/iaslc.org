<script lang="ts">
import { defineComponent, ref } from "vue";
import WCLC21DSA from "../assets/WCLC21-DSA.jpg";
import WCLC21Lectureship from "../assets/WCLC21-lectureship.jpg";
export default defineComponent({
  components: {},

  setup() {
    let winnersData = ref([
      {
        image: WCLC21DSA,
        title: "DISTINGUISHED SERVICE AWARDS",
        desc: "Each year, the IASLC honors professionals who have made major contributions to the field of thoracic cancers with its Distinguished Service Awards.",
      },
      {
        image: WCLC21Lectureship,
        title: "LECTURESHIP AWARDS",
        desc: "The International Association for the Study of Lung Cancer at its 2021 World Conference on Lung Cancer presented awards to clinicians and researchers who made significant contributions to the fight against lung cancer.",
      },
    ]);
    return {
      winnersData,
    };
  },
});
</script>

<template>
  <h1 class="text-black text-center text-3xl font-medium my-10">
    AWARD WINNERS
  </h1>

  <div class="flex flex-col lg:flex-row lg:justify-around">
    <div
      v-for="(data, index) in winnersData"
      :key="index"
      class="flex flex-col my-2"
    >
      <div class="px-4 lg:px-0"><img :src="data.image" /></div>

      <div
        class="bg-white -mt-14 lg:max-w-lg max-w-xs mx-auto shadow-lg px-5 lg:px-6 py-5 lg:py-0 text-center h-full"
      >
        <h5 class="text-3xl font-medium text-gray-900 my-4">
          {{ data.title }}
        </h5>

        <div class="my-5 text-gray-700 text-lg font-serif max-w-lg">
          {{ data.desc }}
        </div>
        <div class="my-3">
          <button
            class="py-2 px-3 text-base font-medium text-white bg-red-700 uppercase"
          >
            View award Winners
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
