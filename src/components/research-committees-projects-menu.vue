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
         <a class="flex   " > Research Committees & Projects     </a>    
       <ul :class="{'flex flex-col bg-white    items-start       text-black':showMenu ,'hidden ':!showMenu}">
          
        <li   class="px-5 py-3  hover:border-b-2 border-red-600">Advanced Radiation Technology Committee</li>
        <li   class="px-5 py-3  hover:border-b-2 border-red-600">Career Development and Fellowship Committee </li>
        <li   class="px-5 py-3  hover:border-b-2 border-red-600">Continuing Medical Education Committee </li>
        <li   class="px-5 py-3  hover:border-b-2 border-red-600">Education Committee</li>
        <li   class="px-5 py-3  hover:border-b-2 border-red-600">Mesothelioma Committee </li>
        <li   class="px-5 py-3  hover:border-b-2 border-red-600">Nurses and Allied Health Professionals Committee</li>  
        <li   class="px-5 py-3  hover:border-b-2 border-red-600">Pathology Committee </li>
        <li   class="px-5 py-3  hover:border-b-2 border-red-600">Screening and Early Detection Committee </li>
        <li   class="px-5 py-3  hover:border-b-2 border-red-600">Staging and Prognostic Factors Committee</li>  
        <li   class="px-5 py-3  hover:border-b-2 border-red-600">Tobacco Control and Smoking Cessation Committee </li>
       </ul>
    </button>  
    </template>
     