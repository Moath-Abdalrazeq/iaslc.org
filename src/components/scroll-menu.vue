<template>
    <div id="ScrollHeaderId"> <menu-part-one></menu-part-one></div>
     
</template>
<script lang="ts">
import { defineComponent ,onMounted,ref} from 'vue'
 import MenuPartOne from './menu-part-one.vue'
export default defineComponent({
    components:{MenuPartOne},
    setup() {
         

        function OnScroll() {
             
             if (window.pageYOffset > 200) {
                let elm = document.getElementById("ScrollHeaderId")
                if (elm) { 
                  elm.className=" hidden   "
                 
                }
            }else{
                  let elm = document.getElementById("ScrollHeaderId")
                if (elm) {  
                 elm.className=""
               

                }
            }
        }
        window.onscroll = OnScroll;
       function init( ) {
        let x =document.getElementById("ScrollHeaderId")
        if (x) {
            x.className="text-black"
        }
        
       }
       onMounted(init);
        
    },
})
</script>
