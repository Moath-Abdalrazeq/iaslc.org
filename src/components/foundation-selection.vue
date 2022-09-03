<script lang="ts">
    import { defineComponent } from 'vue'
    import arrowHover from './arrow-hover.vue'
    
    export default defineComponent({
      components: { arrowHover },
        setup() {},
    })
    </script>
    <template>
        <div class="relative inline-block hover:block   z-30   ">
       <button class="peer     hover:underline  ">  <a class="flex" >   Foundation <arrow-hover class="w-4"></arrow-hover>   </a>   </button>  
       <div class="hidden peer-hover:flex hover:flex flex-col bg-white      text-black">
      
        <a href="#" class="px-5 py-3 hover:translate-x-2">Donor Recognition</a>
        <a href="#" class="px-5 py-3 hover:translate-x-2 ">Research Grant Program</a>
        <a href="#" class="px-5 py-3 hover:translate-x-2 ">Grant Recipient Spotlights</a>
        <a href="#" class="px-5 py-3 hover:translate-x-2 ">Research Grant Recipients</a>
       
        
      </div>
      </div>  
    </template>
     