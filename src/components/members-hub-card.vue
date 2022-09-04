 <template>
     <div class="justify-end flex mr-10 items-end"> 
<div class="p-8 w-80 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col  ">
    
    <p class="mb-3 font-bold  text-xl ">MEMBERS HUB </p><hr>
    <a href="#" class="font-bold  mt-4 inline-flex items-center text-black hover:text-red-600 text">
        My Account
        <link-icon class="ml-2 w-5 h-5 text-red-600"></link-icon>
 
    </a>
    <a href="#" class="font-bold  mt-4 inline-flex items-center text-black hover:text-red-600">
        Member Services
        <link-icon class="ml-2 w-5 h-5 text-red-600"></link-icon>
     </a>
    <a href="#" class="font-bold  mt-4 inline-flex items-center text-black hover:text-red-600">
        Pay Dues
        <link-icon class="font-bold  ml-2 w-5 h-5 text-red-600"></link-icon>
 
     </a>
    <a href="#" class="font-bold  mt-4 inline-flex items-center text-black hover:text-red-600">
        Member Directory
        <link-icon class="font-bold  ml-2 w-5 h-5 text-red-600"></link-icon>
     </a>
    <a href="#" class="font-bold  mt-4 inline-flex items-center text-black hover:text-red-600">
        Member Login
        <link-icon class="font-bold  ml-2 w-5 h-5 text-red-600"></link-icon>
     </a>
</div>
</div>
 </template>
  <script lang="ts">
  import { defineComponent } from 'vue'
  import linkIcon from './link-icon.vue'
  export default defineComponent({
    components:{linkIcon},
    setup() {
        
    },
  })
  </script>
  
 
 