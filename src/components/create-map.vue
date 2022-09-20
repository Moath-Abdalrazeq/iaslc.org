<template>
  <div
    class="text-center m-auto max-w-xs lg:max-w-xl lg:font-serif text-2xl text-black my-10"
  >
    <div>IASLC'S INTERNATIONAL AND</div>
    <div>MULTIDISCIPLINARY MEMBERSHIP</div>

    <hr class="m-auto mt-3 w-32 border border-red-800 bg-red-900" />
  </div>
  <p class="text-center italic m-auto lg:max-w-6xl font-serif leading-7">
    Despite the worldwide focus on COVID-19, IASLC members from all corners of
    the world continued to drive scientific advancements and collaboration.
    IASLC members worked in incredibly difficult circumstances during the
    pandemic. Furthering the mission of the IASLC, members were supported in
    these global efforts by receiving discounted registration fees to meetings
    and educational events, complimentary access to the Journal of Thoracic
    Oncology and discounted publication fees for the open-access IASLC Journal,
    JTO Clinical and Research Reports. (JTO CRR)
  </p>
  <button
    class="m-auto mt-5 mb-5 flex bg-red-600 py-2 px-3 text-center text-white"
  >
    READ MORE
  </button>
  <h1
    class="mt-4 text-center font-serif text-2xl max-w-xs lg:max-w-lg m-auto text-black"
  >
    MEMBERS BY COUNTRY/REGION
  </h1>
  <div class="flex justify-center">
    <div id="map"></div>
  </div>
</template>

<script lang="ts">
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      mapboxgl.accessToken =
        "pk.eyJ1IjoiZmxvd2xlc3M3IiwiYSI6ImNsM2FmcmZ2MDAydmczanM3azNsZ3ZuZmgifQ.cN0HMxD5H-wFJQ6J_sCJBA";
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
      });
    });
    return {};
  },
};
</script>
<style>
#map {
  height: 80vh;
  width: 80vw;
}
@media only screen and (max-width: 844px) {
  #map {
    height: 37vh;
    width: 45vh;
    border-radius: 100px;
  }
}
</style>
