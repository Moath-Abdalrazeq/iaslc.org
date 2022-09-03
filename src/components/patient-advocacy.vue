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
       <button class="peer     hover:underline  ">  <a class="flex" > Patient Advocacy <arrow-hover class="w-4"></arrow-hover>   </a>   </button>  
       <div class="hidden peer-hover:flex hover:flex flex-col bg-white      text-black">
      
        <a href="#" class="px-5 py-3 hover:translate-x-2">Cancer Care Team Award</a>
        <a href="#" class="px-5 py-3 hover:translate-x-2 ">STARS</a>
        <a href="#" class="px-5 py-3 hover:translate-x-2 ">STARS Participants</a>
        <a href="#" class="px-5 py-3 hover:translate-x-2 ">Advocacy Awards</a>
        <a href="#" class="px-5 py-3 hover:translate-x-2 ">Advocacy Partner Spotlight</a>
        <a href="#" class="px-5 py-3 hover:translate-x-2 ">Patient Advocates Committee</a>
        <a href="#" class="px-5 py-3 hover:translate-x-2 ">Patient Advocate Spotlight</a>
        
        
      </div>
      </div>  
    </template>
     