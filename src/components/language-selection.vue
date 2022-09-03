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
       
       <Select class=" p-1  text-3xl  bg-white   w-60 ">
        <option value="NO">English</option>
        <option value="SCREEN PROTECTOR">Arabic</option>
        <option value="Rear CAMERA Lens PROTECTOR">Chinese </option>
        <option value="SCREEN PROTECTOR + Rear CAMERA Lens PROTECTOR">  Russian </option>
    
      </Select>
      


    </template>
     