<script lang="ts">
    import { defineComponent } from 'vue'
    import arrowHover from './arrow-hover.vue'
    
    export default defineComponent({
      components: { arrowHover },
        setup() {},
    })
    </script>
    <template>
        <div class=" group relative inline-block hover:block  ">
       <button class=" py-5     hover:underline  ">  <a class="flex" > Research & Education <arrow-hover class="w-4"></arrow-hover>   </a>   </button>  
       <div class="hidden group-hover:flex   flex-col bg-white   absolute top-15   text-black">
      
        <a href="#" class="px-5 py-3 ">Publications, Resources & Guidelines</a>
        <a href="#" class="px-5 py-3  ">Journals</a>
        <a href="#" class="px-5 py-3   ">Research Committees & Projects</a>
        <a href="#" class="px-5 py-3   ">Lung Ambition Alliance</a>
        <a href="#" class="px-5 py-3   ">QOPI Initiative</a>
        <a href="#" class="px-5 py-3   ">Early-Career Opportunities</a>
        <a href="#" class="px-5 py-3   ">Guide to COVID-19 and Lung Cancer</a>
        <a href="#" class="px-5 py-3   ">Staging Project</a>
        <a href="#" class="px-5 py-3   ">IASLC 2022-2023 Academy</a>
        
      </div>
      </div>  
    </template>
     