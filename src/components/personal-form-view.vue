<script lang="ts">
import { defineComponent, ref  } from "vue";
import FormSevice, { formType }  from '../services/forms-service'
import BaseNavigator from "./base-navigator.vue";
 import PersonalModel from "./personal-model.vue";
  export default defineComponent({
    components: { BaseNavigator,  PersonalModel },
    setup() {
      
      const formSevice=FormSevice
      let forms=formSevice.getForm()
      let currentIndex=ref(-1)
      let showPopup = ref(false);
    function closePopup( ) {
      showPopup.value = false;
    }
    
    function editClick( index:number) {
      showPopup.value = !showPopup.value;
      currentIndex.value=index
    }
      
      
 
 
        return { forms,closePopup,editClick ,showPopup, currentIndex};
    },
     
});
  </script>
<template>
    <base-navigator></base-navigator> 
    <div class="flex flex-wrap justify-center  "> 
  <div v-for="(data,index) in forms" :key="index"  >
    <div class=" my-4 mx-4">
  <div class="block rounded-lg shadow-2xl bg-white   ">
    <div class="py-3 px-6 border-b   border-gray-300 flex justify-between w-80 ">
      <div> Your Information </div> 
      <div>
         <button  @click="editClick(index)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> edit </button>
      </div>
    </div>
    <div class="p-6">
   <div class=" mb-2" >Name: {{data.fullName}} </div>
  <div class="mb-2" >  Email: {{data.email}} </div>
  <div class="mb-2" > Gender: {{data.gender}}</div>
  <div class="mb-2" >Zipcode: {{data.Zipcode}}</div>
  <div class="mb-2">City: {{data.city}}</div>
  <div class="mb-2 ">address: {{data.address}}</div>
  </div>
  </div>
</div>
<div>
</div>  
 
      
  </div> 
</div>
<personal-model @on-close-popup="closePopup"  v-if="showPopup"  :current-index="currentIndex"   ></personal-model>
</template>