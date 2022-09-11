<script lang="ts">
import { defineComponent } from "vue";
import logoIaslc from "../assets/iaslc.logo.png";
import languageSelection from "./language-selection.vue";
import SearchBar from "./search-bar.vue";
import MeetingsWebinars from "./meetings-webinars.vue";
import ResearchEducation from "./research-education.vue";
import IaslcNews from "./iaslc-news.vue";
import MembershipSelection from "./membership-selection.vue";
import PatientAdvocacy from "./patient-advocacy.vue";
import FoundationSelection from "./foundation-selection.vue";
export default defineComponent({
  components: {
    languageSelection,
    SearchBar,
    MeetingsWebinars,
    ResearchEducation,
    IaslcNews,
    MembershipSelection,
    PatientAdvocacy,
    FoundationSelection,
  },
  setup() {
    return { logoIaslc };
  },
});
</script>
<template>
  <!-- language -->
  <div class=" ">
    <div class="w-full bg-white">
      <div class="mt-2 mr-4 flex justify-end">
        <language-selection
          class="border-b-2 hover:border-orange-500"
        ></language-selection>
      </div>
      <!-- menu -->

      <div class="flex justify-between">
        <div>
          <img :src="logoIaslc" class="w-32" />
        </div>

        <div class="mr-4 flex items-center space-x-6 text-lg">
          <h1>About us</h1>
          <a href="#">Contact</a>
          <a href="#">Careers</a>
          <a href="#">Corporate Relations</a>
          <router-link to="/annualReport"
            ><a href="#">Annual Report</a></router-link
          >
          <search-bar></search-bar>
          <router-link to="/donatePage"
            ><button class="bg-red-600 p-2 font-bold text-white">
              DONATE
            </button></router-link
          >
        </div>
      </div>

      <div class="m-auto flex h-10 justify-end text-lg font-bold">
        <a href="#" class="px-5"> <meetings-webinars></meetings-webinars> </a>
        <a href="#" class="px-5"> <research-education></research-education> </a>
        <a href="#" class="px-5"> <iaslc-news></iaslc-news> </a>
        <a href="#" class="px-5">
          <membership-selection></membership-selection>
        </a>
        <a href="#" class="px-5"> <patient-advocacy></patient-advocacy> </a>
        <a href="#" class="px-5">
          <foundation-selection></foundation-selection>
        </a>
      </div>
    </div>
  </div>
</template>
