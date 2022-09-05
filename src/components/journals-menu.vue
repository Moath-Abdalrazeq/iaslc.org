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
         <a class="flex   " > Journals     </a>    
       <ul :class="{'flex flex-col bg-white    items-start       text-black':showMenu ,'hidden ':!showMenu}">
          
        <li   class="px-5 py-3  hover:border-b-2 border-red-600">Journal of Thoracic Oncology </li>
        <li   class="px-5 py-3  hover:border-b-2 border-red-600">JTO Clinical and Research Reports (JTO CRR) </li>
        <li   class="px-5 py-3  hover:border-b-2 border-red-600">IASLC Reviewer Workshop </li>

      </ul>
    </button>  
    </template>
     