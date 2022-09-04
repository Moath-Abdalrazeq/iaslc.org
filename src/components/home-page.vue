<template>
     <div class=" bg-contain h-screen lg:bg-cover    bg-fixed bg-no-repeat  " :style="{'background-image': `url(${headerImg})`  }" >

    <menu-header ></menu-header>
    <div class="translate-y-96"> <members-hub-card></members-hub-card></div>
     </div>
     <div class=" mt-8 ">
        <the-international-para></the-international-para>
     </div>
     <div>
        <in-focus></in-focus>
        
     </div>

     <div>
        <four-cards></four-cards>
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
    export default defineComponent({
        components:{menuHeader, MembersHubCard, TheInternationalPara, InFocus, FourCards},
        setup() {
            return{headerImg}
        },
    })
    </script>