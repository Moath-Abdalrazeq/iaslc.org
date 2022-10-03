<template>
  <BaseNavigator></BaseNavigator>
  <welcome-letter></welcome-letter>
  <div class="mt-8 mb-8"><CreateMap></CreateMap></div>
  <div class="flex justify-center my-10">
    <ChartJs></ChartJs>
  </div>
  <base-slider-commites></base-slider-commites>
  <cards-dropdown></cards-dropdown>
  <meetings-card></meetings-card>
  <iaslc-world></iaslc-world>
  <cards-wclc></cards-wclc>
  <award-winners></award-winners>
  <div class="lg:mx-16 mx-6 my-10">
    <div class="lg:text-3xl text-2xl">JTO IMPACT FACTOR ON THE RISE</div>
    <bar-chart></bar-chart>
  </div>
  <our-jornals></our-jornals>
  <financials-table></financials-table>
  <set-timeout-picture></set-timeout-picture>
   <tabs-viwe></tabs-viwe> 
   <file-drop-page></file-drop-page>
  <download-files></download-files>
  <footer-page></footer-page>
 </template>
<script lang="ts">
import { defineComponent, ref } from "vue";
 import BaseNavigator from "./base-navigator.vue";
import meetingsCard from "./meetings-card.vue";
import CreateMap from "./create-map.vue";
import BaseSliderCommites from "./base-slider-commites.vue";
import CharDiagrame from "./char-diagrame.vue";
 import ChartJs from "./chart-js.vue";
import cardsWclc from "./cards-wclc.vue";
import awardWinners from "./award-winners.vue";
import iaslcWorld from "./iaslc-world.vue";
import barChart from "@/components/bar-chart.vue";
import ourJornals from "@/components/our-jornals.vue";
import financialsTable from "@/components/financials-table.vue";
import cardsDropdown from "./cards-dropdown.vue";
import welcomeLetter from "./welcome-letter.vue";
import footerPage from "./footer-page.vue";
import setTimeoutPicture from "./settimeout-picture.vue";
import tabsViwe from "./tabs-viwe.vue";
 import downloadFiles from "./download-files.vue";
import fileDropPage from "./File-drop-page.vue";
export default defineComponent({
  components: {
    cardsDropdown,
    meetingsCard,
    welcomeLetter,
    BaseNavigator,
    CreateMap,
    BaseSliderCommites,
    CharDiagrame,
    footerPage,
    setTimeoutPicture,
    ChartJs,
    cardsWclc,
    awardWinners,
    iaslcWorld,
    barChart,
    ourJornals,
    financialsTable,
    tabsViwe,
    downloadFiles,
    fileDropPage,
},
  setup() { 
    return {};
  },
});
</script>
