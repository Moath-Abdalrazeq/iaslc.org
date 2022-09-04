<template>
        <div class="  justify-end  text-lg  lg:h-10    flex   ">

<a href="#" class="px-5   "> <meetings-webinars></meetings-webinars> </a>
<a href="#" class="px-5    "> <research-education></research-education> </a>
<a href="#" class="px-5  "> <iaslc-news></iaslc-news> </a>
<a href="#" class="px-5     "> <membership-selection></membership-selection> </a>
<a href="#" class="px-5   "> <patient-advocacy></patient-advocacy> </a>
<a href="#" class="px-5  "> <foundation-selection></foundation-selection> </a>          
</div> 
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MeetingsWebinars from './meetings-webinars.vue'
import ResearchEducation from './research-education.vue'
import IaslcNews from './iaslc-news.vue'
import MembershipSelection from './membership-selection.vue'
import PatientAdvocacy from './patient-advocacy.vue'
import FoundationSelection from './foundation-selection.vue'
export default defineComponent({
    components:{MeetingsWebinars,ResearchEducation,IaslcNews,MembershipSelection,PatientAdvocacy,FoundationSelection},
    setup() {
        
    },
})
</script>
