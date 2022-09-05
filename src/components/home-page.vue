<template>
     <menu-header ></menu-header>
     <div class=" bg-contain h-screen lg:bg-cover    bg-fixed bg-no-repeat  " :style="{'background-image': `url(${headerImg})`  }" >
       
         
     </div>
     <members-hub-card></members-hub-card> 
     <div class=" mt-8 ">
        <the-international-para></the-international-para>
     </div>
     <div>
        <in-focus></in-focus>
        
     </div>
     <div>
        <four-cards></four-cards>
     </div>
 <div >
    <air-pollution></air-pollution>
 </div>
 <div>
    <iaslc-atlas></iaslc-atlas>
 </div>
</template>

 
<script lang="ts">
    import { defineComponent } from 'vue'
    import menuHeader from './menu-header.vue'
    import headerImg from '../assets/img-header.jpg'
    import MembersHubCard from './members-hub-card.vue'
import TheInternationalPara from './the-international-para.vue'
import InFocus from './in-focus.vue'
import FourCards from './four-cards.vue'
import AirPollution from './air-pollution.vue'
import IaslcAtlas from './iaslc-atlas.vue'
    export default defineComponent({
        components:{ menuHeader, MembersHubCard, TheInternationalPara, InFocus, FourCards, AirPollution, IaslcAtlas },
        setup() {
            return{headerImg}
        },
    })
    </script>