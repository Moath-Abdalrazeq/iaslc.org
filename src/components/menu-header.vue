<script lang="ts">
import { defineComponent } from 'vue'
import logoIaslc from '../assets/iaslc.logo.png'
import languageSelection from './language-selection.vue'
import SearchBar from './search-bar.vue'
export default defineComponent({
  components: { languageSelection, SearchBar },
    setup() {
        return{logoIaslc}
    },
})
</script>
<template>
    <!-- language -->
    <div class=" justify-end flex mt-8 mr-5  "><language-selection class="border-b-2 hover:border-orange-500"></language-selection></div>
  <!-- menu -->
  
<div class="text-3xl flex justify-between ">

        <div>
            <img :src="logoIaslc"  class="w-96 " >
        </div>
       
        <div class=" flex items-center space-x-10  ">
         <h1 >About us</h1>
        <a href="#" >Contact</a>
        <a href="#">Careers</a>
        <a href="#" >Corporate Relations</a>
         <a href="#" >Annual Report</a>
         <search-bar></search-bar>
         <h2 class="bg-red-600  p-4 h-16 text-white font-bold">DONATE</h2>
        </div>
        
    </div>
     
     
</template>

