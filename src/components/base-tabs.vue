<template>
  <div>
    <ul class="flex  mb-6 mt-4 bg-blue-900 p-1.5 rounded-lg text-center">
      <li
        v-for="(tab, index) in tabsNames"
        :key="index"
        class="w-full px-4 py-1.5 rounded-lg " >
         <button  @click="tabClicked(index) " :class="{'text-blue-600  bg-white rounded-lg  shadow-xl p-2':!activeTab , 'text-white':activeTab}">
         {{tab }}
        </button> 
      </li>
    </ul>
    <div>
      <div>
        <slot name="tabPanel" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
export default defineComponent ({
  props: {
    tabsNames: {
      type:Array as PropType<string[]> ,
      required: true,
    }
  },
  emits:['onTabClick'],
  setup(props,{emit}){
    let active=ref(1)
    let activeTab=ref(false)
     function tabClicked(index:number) {
    emit('onTabClick',index) 
     }
return{
  tabClicked,
  activeTab,active
}
  }
});
</script>