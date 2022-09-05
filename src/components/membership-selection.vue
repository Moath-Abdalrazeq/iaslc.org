  
     <script lang="ts">
      import { defineComponent, ref } from 'vue'
      import arrowHover from './arrow-hover.vue'
import ArrowRightHero from './arrow-right-hero.vue'
import LinkIcon from './link-icon.vue'
      let showMenu =ref(false)
      export default defineComponent({
        components: { arrowHover, ArrowRightHero, LinkIcon },
          setup() {
            return{showMenu}
          },
      })
      </script>
      <template>
           
         <button @mouseover="showMenu=true" @mouseleave="showMenu=false"    > 
           <a class="flex hover:border-b-2 border-red-600  " > Membership <arrow-hover class="w-4"></arrow-hover>   </a>    
         <ul :class="{'flex flex-col bg-white   absolute  items-start  text-black':showMenu ,'hidden ':!showMenu}">
          <li class="px-5 py-3 hover:border-b-2 mt-4 border-red-600 text-3xl flex">Membership <arrow-right-hero></arrow-right-hero>  </li>  <hr class="text-blue-800 w-80 ml-5" >     
          <li   class="px-5   py-3 hover:border-b-2 border-red-600 flex">Become a Member <link-icon class="ml-2 w-5 h-5 text-red-600"></link-icon></li>
          <li   class=" px-5 py-3  hover:border-b-2 border-red-600 flex">Renew Your Membership <link-icon class="ml-2 w-5 h-5 text-red-600"></link-icon></li>
          <li   class="px-5  py-3   hover:border-b-2 border-red-600">Partner Society Membership Offers</li>
          <li   class="px-5  py-3  hover:border-b-2 border-red-600 ">Membership Committee</li>
           
     
        
        </ul>
      </button>  
      </template>
       