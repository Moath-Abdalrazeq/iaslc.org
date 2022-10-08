<script lang="ts">
  import { defineComponent, ref  } from "vue";
      import FormSevice, { formTypeWork }  from '../services/forms-service'
      import basePopup from "./base-popup.vue";
         export default defineComponent({
          components: {   basePopup },
          props: {currentIndex:{type:Number, required:true}},
          emits:['onClosePopup'],
          setup(props,{emit}) {
      let showPopup=ref(false)
      const formSevice = FormSevice;
      let name = ref("");
      let email = ref("");
      let experience = ref("");
      let message = ref("");
      let files = ref({});
      let favouriteLanguage = ref("");
      function closePopup(close: boolean) {
            showPopup.value = close;
            emit('onClosePopup')
          }
      function addForm() {
        if (name.value,experience.value,message.value,files.value,email.value,favouriteLanguage.value ) {

        let typeformWork: formTypeWork = {
          name: name.value,
          email: email.value,
          experience: experience.value,
          message: message.value,
          files: files.value,
          favouriteLanguage: favouriteLanguage.value,
        };
        formSevice.editFormWork(props.currentIndex,typeformWork);
        closePopup(showPopup.value)
        alert("Edit Success");
      }
    }
      
      function handleInput(e : InputEvent) : void{
      files.value=URL.createObjectURL(e.target.files[0])
       }
      return { name, email,handleInput, experience, message,files, favouriteLanguage, addForm,closePopup,addForm };
    },
          
      });
        </script>
  <template>
          <base-popup   @on-close-popup="closePopup">
          <template #content>   
            <form @submit.prevent>
              <div class="bg-white rounded shadow-lg px-4 p-8 mb-6">
          <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <label class="container max-w-screen-lg">
            <span class="text-gray-700 font-bold">Your name</span>
            <input
            required
              v-model="name"
              type="text"
              class="block w-full mt-1 px-2 border-black border py-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Joe Bloggs"
            />
          </label>
          <label class="block mb-6">
            <span class="text-gray-700 font-bold">Email address</span>
            <input
            required
              v-model="email"
              type="email"
              class="block w-full mt-1 border-black border px-2 py-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="joe.bloggs@example.com"
            />
          </label>
          <label class="block mb-6">
            <span class="text-gray-700 font-bold">Years of experience</span>
            <select
            required
              v-model="experience"
              class="block w-full mt-1 border-black border py-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option>Less than a year</option>
              <option>1 - 2 years</option>
              <option>2 - 4 years</option>
              <option>4 - 7 years</option>
              <option>7 - 10 years</option>
              <option>10+ years</option>
            </select>
          </label>
          <label class="block mb-6">
            <span class="text-gray-700 font-bold"
              >Tell us more about yourself</span
            >
            <textarea
            required
              v-model="message"
              class="block w-full mt-1 border-black border py-1 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              rows="3"
              placeholder="What motivates you?"
            ></textarea>
          </label>
          <label class="block mb-6">
            <span class="text-gray-700 font-bold">Your CV</span>
            <div>  
              <input required  type="file"   @input="handleInput"   :v-model="files"
              accept=".doc,.docx,.txt,.pdf "/>
             </div>
          </label>
          <label class="block mb-6"> 
          <div class="font-bold" >Please select your favorite language:</div>
               <div class="flex">
                 <input required type="radio" id="Android" name="favouriteLanguage" value="Android"     v-model="favouriteLanguage"/>
                 <label class="  font-semibold py-2 px-4 cursor-pointer" for="Android">Android</label>
                 <input required type="radio" id="Web" value="Web"  name="favouriteLanguage" v-model="favouriteLanguage" />
                 <label class="  font-semibold py-2 px-4 cursor-pointer" for="Web">Web</label>
               </div>
              </label>
          <div class="mb-6">
            <button
              type="submit"
              class="h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800"
              @click="addForm"
            >
              submit
            </button>
          </div>
          </div>
          </div>
        </form>
    </template>
          </base-popup> 
  </template>
  