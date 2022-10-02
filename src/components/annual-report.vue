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
  <settimeout-picture></settimeout-picture>
  <TabsViwe></TabsViwe>
  <FileDropPage></FileDropPage>
  <DownloadFiles></DownloadFiles>
  <FooterPage></FooterPage>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import wordImg from "../assets/word.jpg";
import doctorImg from "../assets/doctor.jpg";
import iaslckrImg from "../assets/iaslckr.jpg";
import BasePopup from "./base-popup.vue";
import YoutubeVideo from "./youtube-video.vue";
import BaseNavigator from "./base-navigator.vue";
import meetingsCard from "./meetings-card.vue";
import CreateMap from "./create-map.vue";
import BaseSliderCommites from "./base-slider-commites.vue";
import CharDiagrame from "./char-diagrame.vue";
import MeetingsCard from "./meetings-card.vue";
import ChartJs from "./chart-js.vue";
import cardsWclc from "./cards-wclc.vue";
import awardWinners from "./award-winners.vue";
import iaslcWorld from "./iaslc-world.vue";
import barChart from "@/components/bar-chart.vue";
import ourJornals from "@/components/our-jornals.vue";
import financialsTable from "@/components/financials-table.vue";
import CardsDropdown from "./cards-dropdown.vue";
import WelcomeLetter from "./welcome-letter.vue";
import FooterPage from "./footer-page.vue";
import SettimeoutPicture from "./settimeout-picture.vue";
import TabsViwe from "./tabs-viwe.vue";
import DownloadFiles from "./download-files.vue";
import FileDropPage from "./File-drop-page.vue";

export default defineComponent({
  components: {
    BasePopup,
    meetingsCard,
    YoutubeVideo,
    BaseNavigator,
    CreateMap,
    BaseSliderCommites,
    CharDiagrame,
    CardsDropdown,
    MeetingsCard,
    ChartJs,
    cardsWclc,
    awardWinners,
    iaslcWorld,
    barChart,
    ourJornals,
    financialsTable,
    WelcomeLetter,
    FooterPage,
    SettimeoutPicture,
    TabsViwe,
    DownloadFiles,
    FileDropPage,
  },
  setup() {
    let showPopup = ref(false);
    function videoClicked() {
      showPopup.value = true;
    }
    function closePopup(close: boolean) {
      showPopup.value = close;
    }
    return {
      wordImg,
      doctorImg,
      iaslckrImg,
      videoClicked,
      showPopup,
      closePopup,
      tabList: ["Tab 1", "Tab 2", "Tab 3", "Tab 4"],
    };
  },
});
</script>
