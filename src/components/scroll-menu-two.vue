<template>
    <div id=" HeaderId"> <menu-part-two></menu-part-two> </div>
     
</template>
<script lang="ts">
import { defineComponent ,onMounted,} from 'vue'
import MenuPartTwo from './menu-part-two.vue'
  
export default defineComponent({
    components:{MenuPartTwo },
    setup() {
         

        function OnScroll() {
             
             if (window.pageYOffset > 300) {
                let elm = document.getElementById("HeaderId")
                if (elm) { 
                  elm.className=" fixed bg-white text-black  "
                 
                }
            }else{
                  let elm = document.getElementById("HeaderId")
                if (elm) {  
                 elm.className=""
               

                }
            }
        }
        window.onscroll = OnScroll;
       function init( ) {
        let x =document.getElementById("HeaderId")
        if (x) {
            x.className="text-black"
        }
        
       }
       onMounted(init);
        
    },
})
</script>
