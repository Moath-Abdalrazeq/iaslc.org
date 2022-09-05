 
     
<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import arrowHover from './arrow-hover.vue'
import ArrowRightHero from './arrow-right-hero.vue'
  let showMenu =ref(false)
  export default defineComponent({
    components: { arrowHover, ArrowRightHero },
      setup() {
        return{showMenu}
      },
  })
  </script>
  <template>
       
     <button @mouseover="showMenu=true" @mouseleave="showMenu=false"    > 
       <a class="flex hover:border-b-2 border-red-600  " > Foundation <arrow-hover class="w-4"></arrow-hover>   </a>    
     <ul :class="{'flex flex-col bg-white   absolute  items-start  text-black right-4':showMenu ,'hidden ':!showMenu}">
     
    <li class="px-5 py-3 hover:border-b-2 mt-4 border-red-600 text-3xl flex"> Foundation  <arrow-right-hero   ></arrow-right-hero> </li>  <hr class="text-blue-800 w-80 ml-5" >     
    <li   class="px-5   py-3 hover:border-b-2 border-red-600">Donor Recognition</li>
    <li   class="px-5   py-3 hover:border-b-2 border-red-600">Research Grant Program</li>
    <li   class="px-5   py-3 hover:border-b-2 border-red-600">Grant Recipient Spotlights</li>
    <li   class="px-5   py-3 hover:border-b-2 border-red-600">Research Grant Recipients</li>
  
    
    
    
    </ul>
  </button>  
  </template>
   
     