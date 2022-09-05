<template>

<div class="relative ml-8 mr-8">
        <img :src="iaslcAtlas" class="h-80 w-full"/>
        <h1 class="absolute text-3xl font-bold text-white top-1/4 ml-8  ">
            THE IASLC ATLAS OF DIAGNOSTIC <br/> IMMUNOHISTOCHEMISTRY (IHC)</h1>
         <h3 class="absolute text-lg text-white top-1/3 ml-8 mt-16 ">New Translations of the IASLC IHC Atlas are available! From IHC biochemistry
              basics to identifying <br/>biomarkers, this text provides a comprehensive view of    diagnostic IHC in a reader-friendly format.</h3>
             <button class="bg-white text-black mt-4 p-4 w-60 absolute top-3/4 ml-8 font-bold ">
    ACCESS THE IHC ATLAS
</button>
     </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import iaslcAtlas from '../assets/IASLC-ATLAS.jpg'
export default defineComponent({
    setup() {
        return{iaslcAtlas}
    },
})
</script>
 