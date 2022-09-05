<script lang="ts">
    import { defineComponent, ref } from 'vue'
    import arrowHover from './arrow-hover.vue'
import ArrowRightHero from './arrow-right-hero.vue'
import JournalsMenu from './journals-menu.vue'
import ResearchCommitteesProjectsMenu from './research-committees-projects-menu.vue'
    let showMenu =ref(false)
    export default defineComponent({
      components: { arrowHover, ArrowRightHero, JournalsMenu, ResearchCommitteesProjectsMenu },
        setup() {
          return{showMenu}
        },
    })
    </script>
    <template>
         
       <button @mouseover="showMenu=true" @mouseleave="showMenu=false"    > 
         <a class="flex hover:border-b-2 border-red-600  " > Research & Education <arrow-hover class="w-4"></arrow-hover>   </a>    
       <ul :class="{'flex flex-col bg-white   absolute  items-start  text-black':showMenu ,'hidden ':!showMenu}">
        <li class="px-5 py-3 mt-4 hover:border-b-2 border-red-600 text-3xl flex">Research & Education  <arrow-right-hero></arrow-right-hero>  </li>  <hr class="text-blue-800 w-80 ml-5" > 
        <li   class="px-5 py-3 hover:border-b-2 border-red-600">Publications, Resources & Guidelines</li>
        <li   class="px-5 py-3  hover:border-b-2 border-red-600"><journals-menu></journals-menu></li>
        <li   class="px-5 py-3   hover:border-b-2 border-red-600"> <research-committees-projects-menu></research-committees-projects-menu></li>
        <li   class="px-5 py-3  hover:border-b-2 border-red-600 ">Lung Ambition Alliance</li>
        <li   class="px-5 py-3  hover:border-b-2 border-red-600 ">QOPI Initiative</li>
        <li   class="px-5 py-3 hover:border-b-2 border-red-600  ">Early-Career Opportunities</li>
        <li   class="px-5 py-3  hover:border-b-2 border-red-600 ">Guide to COVID-19 and Lung Cancer</li>
        <li   class="px-5 py-3  hover:border-b-2 border-red-600 ">Staging Project</li>
        <li  class="px-5 py-3  hover:border-b-2 border-red-600 ">IASLC 2022-2023 Academy</li>
      
      </ul>
    </button>  
    </template>
     