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
       <button class="peer     hover:underline  ">  <a class="flex" >Membership<arrow-hover class="w-4"></arrow-hover>   </a>   </button>  
       <div class="hidden peer-hover:flex hover:flex flex-col bg-white      text-black">
      
        <a href="#" class="px-5 py-3 hover:translate-x-2">Become a Member</a>
        <a href="#" class="px-5 py-3 hover:translate-x-2 ">Renew Your Membership</a>
        <a href="#" class="px-5 py-3 hover:translate-x-2 ">Partner Society Membership Offers</a>
        <a href="#" class="px-5 py-3 hover:translate-x-2 ">Membership Committee</a>
       
        
      </div>
      </div>  
    </template>
     