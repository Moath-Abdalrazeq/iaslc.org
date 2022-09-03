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
       <button class="peer     hover:underline  ">  <a class="flex" > IASLC News <arrow-hover class="w-4"></arrow-hover>   </a>   </button>  
       <div class="hidden peer-hover:flex hover:flex flex-col bg-white      text-black">
      
        <a href="#" class="px-5 py-3 hover:translate-x-2">Search ILCN</a>
        <a href="#" class="px-5 py-3 hover:translate-x-2 ">WCLC 2022 News</a>
        <a href="#" class="px-5 py-3 hover:translate-x-2 ">Press Releases</a>
        <a href="#" class="px-5 py-3 hover:translate-x-2 ">ILCN Editorial Group</a>
        <a href="#" class="px-5 py-3 hover:translate-x-2 ">Lung Cancer Considered Podcast</a>
        <a href="#" class="px-5 py-3 hover:translate-x-2 ">Communications Committee</a>
        <a href="#" class="px-5 py-3 hover:translate-x-2 ">ILCN Multidisciplinary Forum Theater</a>
       
        
      </div>
      </div>  
    </template>
     