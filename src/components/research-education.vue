<script lang="ts">
    import { defineComponent } from 'vue'
    import arrowHover from './arrow-hover.vue'
    
    export default defineComponent({
      components: { arrowHover },
        setup() {},
    })
    </script>
    <template>
        <div class="relative inline-block hover:block   z-30 ">
       <button class="peer     hover:underline  ">  <a class="flex" > Research & Education <arrow-hover class="w-4"></arrow-hover>   </a>   </button>  
       <div class="hidden peer-hover:flex hover:flex flex-col bg-white      text-black">
      
        <a href="#" class="px-5 py-3 hover:translate-x-2">Publications, Resources & Guidelines</a>
        <a href="#" class="px-5 py-3 hover:translate-x-2 ">Journals</a>
        <a href="#" class="px-5 py-3 hover:translate-x-2 ">Research Committees & Projects</a>
        <a href="#" class="px-5 py-3 hover:translate-x-2 ">Lung Ambition Alliance</a>
        <a href="#" class="px-5 py-3 hover:translate-x-2 ">QOPI Initiative</a>
        <a href="#" class="px-5 py-3 hover:translate-x-2 ">Early-Career Opportunities</a>
        <a href="#" class="px-5 py-3 hover:translate-x-2 ">Guide to COVID-19 and Lung Cancer</a>
        <a href="#" class="px-5 py-3 hover:translate-x-2 ">Staging Project</a>
        <a href="#" class="px-5 py-3 hover:translate-x-2 ">IASLC 2022-2023 Academy</a>
        
      </div>
      </div>  
    </template>
     