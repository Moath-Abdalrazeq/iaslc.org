<script lang="ts">
import { defineComponent,   ref  } from "vue";
import FormSevice, { formType }  from '../services/forms-service'
import BaseNavigator from "./base-navigator.vue";
 import PersonalModel from "./personal-model.vue";
import NotificationPopup from "./notification-popup.vue";
  export default defineComponent({
    components: { BaseNavigator, PersonalModel, NotificationPopup },
    setup() {
      const formSevice=FormSevice
      let forms=formSevice.getForm()
      let currentIndex=ref(-1)
      let showPopup = ref(false);
      let showNotification=ref(false)
      let listItems=ref<string[]>([])
      function closePopup( ) {
      showPopup.value = false;
    }
    function editClick( index:number) {
       showPopup.value = !showPopup.value;
       currentIndex.value=index
    }
    function formEdit(text:string ) {
      showNotification.value=true
      listItems.value.push(text) 
      setTimeout(()=>listItems.value.splice( listItems.value.length-1 ,1) ,5000)

    }
    function closeNotification(index:number) {
      listItems.value.splice(index ,1) 
    }
        return { forms,closePopup,editClick ,showPopup, showNotification,currentIndex,formEdit,  listItems,closeNotification};
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
  <div class="mb-2" >Email: {{data.email}} </div>
  <div class="mb-2" >Gender: {{data.gender}}</div>
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
<personal-model @on-close-popup="closePopup"  @on-form-edit="formEdit"  v-if="showPopup"  :current-index="currentIndex"></personal-model>
<div class="absolute bottom-3 right-4"  > 
<div v-for="(item,index) in listItems " :key="index" class="my-2" > 
 <notification-popup    @on-close-notification="closeNotification" :popup-text="item" :index="index"  > </notification-popup>
</div>
</div>
</template>