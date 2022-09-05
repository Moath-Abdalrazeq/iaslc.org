<template>
     
    <searchHero @click="searchButton=!searchButton" class=" h-8  " ></searchHero>
          <div class=" relative">
  <div class=" ">
    <div v-if="searchButton" class="   relative flex     w-full  ">
      <input type="search" class="        w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white   border border-solid border-gray-300  " placeholder="Search"  >
      <button class="   px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs   uppercase        " type="button"  >Search</button>
    </div>
  </div>
</div>  
    
  </template>
  
  <script lang="ts">
   import searchHero from './search-hero.vue'
  import { defineComponent, ref } from 'vue'
  
  export default defineComponent({
      components:{searchHero},
      setup() {
          let searchButton= ref(false)
     return  {searchButton}
      },
      directives:{
        autofocus:{
          mounted(el){
            el.focus()
          }
        }
      }
  
  })
  </script>
   