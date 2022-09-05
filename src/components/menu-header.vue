<script lang="ts">
import { defineComponent } from 'vue'
import logoIaslc from '../assets/iaslc.logo.png'
import languageSelection from './language-selection.vue'
import SearchBar from './search-bar.vue'
import MeetingsWebinars from './meetings-webinars.vue'
import ResearchEducation from './research-education.vue'
import IaslcNews from './iaslc-news.vue'
import MembershipSelection from './membership-selection.vue'
import PatientAdvocacy from './patient-advocacy.vue'
import FoundationSelection from './foundation-selection.vue'
import AboutUs from './about-us.vue'
import MenuPartOne from './menu-part-one.vue'
import ScrollMenu from './scroll-menu.vue'
  export default defineComponent({
  components: { languageSelection, SearchBar, MeetingsWebinars, ResearchEducation, IaslcNews, MembershipSelection, PatientAdvocacy, FoundationSelection, AboutUs, MenuPartOne, ScrollMenu },
    setup() {
        return{logoIaslc}
    },
})
</script>
<template>
     
    <div   class="  fixed   bg-white    w-full" > 
      <div class="  flex justify-between     ">
  <div class="mt-8 ml-8"> <img :src="logoIaslc"  class=" w-32   " ></div>
  <scroll-menu></scroll-menu>

      </div>
<div class="  justify-end  text-lg     flex mb-4    ">
<a href="#" class="px-5   "> <meetings-webinars></meetings-webinars> </a>
<a href="#" class="px-5    "> <research-education></research-education> </a>
<a href="#" class="px-5  "> <iaslc-news></iaslc-news> </a>
<a href="#" class="px-5     "> <membership-selection></membership-selection> </a>
<a href="#" class="px-5   "> <patient-advocacy></patient-advocacy> </a>
<a href="#" class="px-5  "> <foundation-selection></foundation-selection> </a>          
</div> 
 
 
 
</div>
</template>

