<script lang="ts">
    import { defineComponent, ref } from "vue";
    import FormSevice, { formTypeWork } from "../services/forms-service";
import WorksEdit from "./works-edit.vue";
import BaseNavigator from "./base-navigator.vue";
import NotificationPopup from '@/components/notification-popup.vue' 
    export default defineComponent({
    setup() {
        let forms=FormSevice.getFormWork()
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
      
      
 
 
        return { forms,closePopup,editClick ,showPopup, currentIndex,closeNotification,formEdit,listItems};
    
    },
    components: { WorksEdit, BaseNavigator,NotificationPopup }
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
   <div class=" mb-2">Name: {{data.name}} </div>
  <div class="mb-2">  Email: {{data.email}} </div>
  <div class="mb-2"> experience: {{data.experience}}</div>
  <div class="mb-2">message: {{data.message}}</div>
  
  <div class="mb-2">CV:<a :href="data.files" class="text-blue-500"> <iframe  :src="data.files"  ></iframe>Your CV </a>  </div>
  <div class="mb-2 ">Favourite Language: {{data.favouriteLanguage}}</div>
  </div>
  </div>
</div>
<div>
</div>  
 
      
  </div> 
</div>
      <works-edit @on-close-popup="closePopup"  @on-form-edit="formEdit"  v-if="showPopup"  :current-index="currentIndex"></works-edit>
      <div class="absolute bottom-3 right-4"  > 
      <div v-for="(item,index) in listItems " :key="index" class="my-2" > 
      <notification-popup @on-close-notification="closeNotification" :popup-text="item" :index="index" ></notification-popup>
      </div>
      </div>
    </template>