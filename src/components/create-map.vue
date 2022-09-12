<template>
  <div id="map"></div>
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
</style>
