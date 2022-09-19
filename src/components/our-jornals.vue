<script lang="ts">
import { defineComponent } from "vue";
import journalsAdjeiAlex from "@/assets/Journals_adjei_alex.jpg";
export default defineComponent({
  components: {},

  setup() {
    return { journalsAdjeiAlex };
  },
});
</script>
<template>
  <div class="lg:flex lg:justify-around mx-4 lg:mx-0">
    <div class="bg-red-700 p-4 w-48">
      <div class="lg:w-96 w-80 mx-4">
        <img :src="journalsAdjeiAlex" />
      </div>
    </div>
    <div class="max-w-2xl lg:my-auto font-serif text-base text-gray-700 my-6">
      It is generally difficult for organ-specific oncology journals to make a
      significant impact in the oncology publishing landscape. With an Impact
      Factor of 15.609, JTO is the leading journal in thoracic oncology and, in
      the top fifteen (ranked 14th) of all cancer journals,” said
      Editor-in-Chief, Dr. Alex A. Adjei, MD, Ph.D. “JTO’s emphasis on
      multidisciplinary research is one of its strengths and serves the broad
      community of researchers in this field.
      <div class="my-6">
        <button
          class="bg-red-700 p-3 shadow-2xl text-white lg:font-semibold uppercase text-base w-80 lg:w-96"
        >
          learn more about our jornals
        </button>
      </div>
    </div>
  </div>
</template>
