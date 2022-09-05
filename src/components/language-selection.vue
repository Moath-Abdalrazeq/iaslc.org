<script lang="ts">
    import { defineComponent,ref } from 'vue'
    import arrowHover from './arrow-hover.vue'
    
    export default defineComponent({
      components: { arrowHover },
        setup() {
            let menuHeader = ref(false)
            return{menuHeader}
        },
    })
    </script>
    <template>
  
       <Select class=" p-1  text-lg  bg-white   w-40  ">
        <option value=" ">English</option>
        <option value=" ">Arabic</option>
        <option value=" ">Chinese </option>
        <option value=" ">  Russian </option>
    
      </Select>
      
    

    </template>
     