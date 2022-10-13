<script lang="ts">
 import { defineComponent, onMounted, ref, watch  } from "vue";
 import BaseNotification from "./base-notification.vue";
           export default defineComponent({
            components: {   BaseNotification },
            props:{popupText:{type:String,requierd:true},
                   index:{type:Number,requierd:true},
                   showNotification:{type:Boolean,requierd:true}
                  },
             emits:['onCloseNotification'],
            setup(props,{emit}) {
              let currentIndex=ref(props.index)
            let showPopup = ref(props.showNotification);
            function closeNotification(close: boolean) {
              showPopup.value = false;
              emit('onCloseNotification',currentIndex.value)
            }
            function init( ) {
              setTimeout(closeNotification ,5000)
            }
            onMounted(init)
            watch(()=>props.index,()=>currentIndex.value=props.index)
                   return {  closeNotification,showPopup  };
            },

            
        });
          </script>

<template>
      <base-notification  @on-close-popup="closeNotification"  >
          <template #content  > 
    <p class="ml-3 text-sm font-bold ">Edit {{popupText}} !</p>
          </template>
         </base-notification>
</template>
    
 