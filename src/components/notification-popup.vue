<script lang="ts">
 import { defineComponent } from "vue";
 import BaseNotification from "./base-notification.vue";
           export default defineComponent({
            components: {   BaseNotification },
            props:{popupText:{type:String,requierd:true},
                   index:{type:Number,requierd:true},
                   showNotification:{type:Boolean,requierd:true}
                  },
             emits:['onCloseNotification'],
            setup(props,{emit}) {
             function closeNotification(){
              emit('onCloseNotification',props.index)
            }
            
              return {  closeNotification  };
            },

            
        });
          </script>
<template>
      <base-notification  @on-close-popup="closeNotification"  >
          <template #content  > 
    <p class="ml-3 text-sm font-bold " :class="{'text-green-500 ':popupText==='Success', '   text-red-500':popupText==='Fail'}">Edit {{popupText}} !</p>
          </template>
         </base-notification>
</template>
    
 