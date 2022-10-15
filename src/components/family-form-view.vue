<script lang="ts">
    import { defineComponent, ref } from "vue";
    import FormSevice, { formTypeFamily } from "../services/forms-service";
import FamilyEdit from "./family-edit.vue";
import BaseNavigator from "./base-navigator.vue";
import NotificationPopup from "./notification-popup.vue";
    export default defineComponent({
      setup() {
      let forms=FormSevice.getFormFamily()
      let currentIndex=ref(-1)
      let showPopup = ref(false);
      let listItems=ref<string[]>([])
      function closePopup( ) {
      showPopup.value = false;
    }
    
    function editClick( index:number) {
      showPopup.value = !showPopup.value;
      currentIndex.value=index
    }
    function formEdit(text:string ) {
      listItems.value.push(text) 
      setTimeout(()=>listItems.value.splice( listItems.value.length-1 ,1) ,5000)

    }
    function closeNotification(index:number) {
      listItems.value.splice(index ,1) 
    }
        return { forms,closePopup,editClick ,showPopup,closeNotification,formEdit, currentIndex,listItems};
    
      },
      components: { FamilyEdit, BaseNavigator, NotificationPopup },
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
   <div class=" mb-2">Name: {{data.fullName}} </div>
  <div class="mb-2">Address: {{data.address}} </div>
  <div class="mb-2">City: {{data.city}}</div>
  <div class="mb-2"> Number of family: {{data.NOFamily}}</div>
  <div class="mb-2">Number of male: {{data.NOMale}}</div>
  <div class="mb-2 ">Number of female:{{data.NOFemale}}</div>
  </div>
  </div>
</div>
<div>
</div>     
  </div> 
</div>
      <family-edit @on-close-popup="closePopup"  @on-form-edit="formEdit"  v-if="showPopup"  :current-index="currentIndex" ></family-edit>
      <div class="absolute bottom-3 right-4"  > 
      <div v-for="(item,index) in listItems " :key="index" class="my-2" > 
      <notification-popup @on-close-notification="closeNotification" :popup-text="item" :index="index" ></notification-popup>
      </div>
      </div>
</template>