<script lang="ts">
import { defineComponent } from 'vue'
import logoIaslc from '../assets/iaslc.logo.png'
import languageSelection from './language-selection.vue'
import SearchBar from './search-bar.vue'
 
import ScrollMenu from './scroll-menu.vue'
import MenuPartTwo from './menu-part-two.vue'
import ScrollMenuTwo from './scroll-menu-two.vue'
export default defineComponent({
  components: { languageSelection, SearchBar,  ScrollMenu, MenuPartTwo, ScrollMenuTwo },
    setup() {
        return{logoIaslc}
    },
})
</script>
<template>
    <!-- language -->
    <div   class=" sticky  top-0     w-full" > 

    <div class="   bg-white  w-full  "> 
    <div class=" justify-end flex  mt-2  mr-4 "><language-selection class="border-b-2 hover:border-orange-500"></language-selection></div>
  <!-- menu -->
  
<div class="  flex justify-between ">

        <div>
            <img :src="logoIaslc"  class=" w-32" >
        </div>
       
 <scroll-menu></scroll-menu>
       
    </div>
  <scroll-menu-two></scroll-menu-two>
 
  </div >
 
</div>
</template>

