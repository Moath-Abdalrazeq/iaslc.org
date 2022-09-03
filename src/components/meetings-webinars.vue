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
       <button class="peer     hover:underline  ">  <a class="flex" > Meetings & Webinars <arrow-hover class="w-4"></arrow-hover>   </a>   </button>  
       <div class="hidden peer-hover:flex hover:flex flex-col bg-white      text-black">
      
        <a href="#" class="px-5 py-3 hover:translate-x-2">Search Upcoming Meetings & Webinars</a>
        <a href="#" class="px-5 py-3 hover:translate-x-2 ">Past Meetings & Webinars</a>
        <a href="#" class="px-5 py-3 hover:translate-x-2 ">Virtual Library</a>
      
      </div>
      </div>  
    </template>
     