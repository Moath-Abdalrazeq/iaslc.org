<template>
  <div class="">
    <BaseNavigator></BaseNavigator>
  </div>
  <WelcomLetter></WelcomLetter>

  <!--  -->

  <div class="mt-8 mb-8"><CreateMap></CreateMap></div>
  <div class="flex justify-around">
    <char-diagrame></char-diagrame>
    <char-diagrame></char-diagrame>
  </div>

  <base-slider-commites></base-slider-commites>

  <CardsDropdown></CardsDropdown>
  <MeetingsCard></MeetingsCard>
  <FinancialsTable></FinancialsTable>
  <CompanyLogo></CompanyLogo>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

import BasePopup from "./base-popup.vue";
import BaseNavigator from "./base-navigator.vue";

import CreateMap from "./create-map.vue";
import BaseSliderCommites from "./base-slider-commites.vue";
import CharDiagrame from "./char-diagrame.vue";
import CardsDropdown from "./cards-dropdown.vue";
import MeetingsCard from "./meetings-card.vue";
import FinancialsTable from "./financials-table.vue";
import WelcomLetter from "./welcom-letter.vue";
import CompanyLogo from "./company-logo.vue";

export default defineComponent({
  components: {
    BasePopup,
    BaseNavigator,
    CreateMap,
    BaseSliderCommites,
    CharDiagrame,
    CardsDropdown,
    MeetingsCard,
    FinancialsTable,
    WelcomLetter,
    CompanyLogo,
  },
  setup() {
    return {};
  },
});
</script>
