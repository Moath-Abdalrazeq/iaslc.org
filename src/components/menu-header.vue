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
export default defineComponent({
  components: { languageSelection, SearchBar, MeetingsWebinars, ResearchEducation, IaslcNews, MembershipSelection, PatientAdvocacy, FoundationSelection },
    setup() {
        return{logoIaslc}
    },
})
</script>
<template>
    <!-- language -->
    <div   class="sticky  top-0 " > 

    <div class="   bg-white  w-full  "> 
    <div class=" justify-end flex  mt-2  mr-4 "><language-selection class="border-b-2 hover:border-orange-500"></language-selection></div>
  <!-- menu -->
  
<div class="  flex justify-between ">

        <div>
            <img :src="logoIaslc"  class=" w-32" >
        </div>
       
        <span class=" flex items-center   space-x-6  text-lg mr-4 ">
         <h1 >About us</h1>
        <a href="#" >Contact</a>
        <a href="#">Careers</a>
        <a href="#" >Corporate Relations</a>
         <a href="#" >Annual Report</a>
         <search-bar></search-bar>
         <button class="bg-red-600  p-2   text-white font-bold">DONATE</button>
        </span>
       
    </div>
    
    <div class="  justify-end  text-lg  lg:h-10    flex   ">

        <a href="#" class="px-5   "> <meetings-webinars></meetings-webinars> </a>
        <a href="#" class="px-5    "> <research-education></research-education> </a>
        <a href="#" class="px-5  "> <iaslc-news></iaslc-news> </a>
        <a href="#" class="px-5     "> <membership-selection></membership-selection> </a>
        <a href="#" class="px-5   "> <patient-advocacy></patient-advocacy> </a>
        <a href="#" class="px-5  "> <foundation-selection></foundation-selection> </a>          
      </div> 
  </div >
 
</div>
</template>

