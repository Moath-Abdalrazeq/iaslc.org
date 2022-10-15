<script lang="ts">
    import { defineComponent, ref  } from "vue";
        import FormSevice, { formTypeFamily }  from '../services/forms-service'
        import basePopup from "./base-popup.vue";
           export default defineComponent({
            components: {   basePopup },
            props: {currentIndex:{type:Number, required:true}},
            emits:['onClosePopup','onFormEdit'],
  setup(props,{emit}) {
     const formSevice = FormSevice;
      let fullName=ref("");
      let NOFamily=ref(0);
      let NOMale=ref(0);
      let NOFemale=ref(0);
      let address=ref("");
      let popupText=ref('')
      let city=ref("");
      function closePopup( ) {
       emit('onClosePopup')
            }
      function addForm() {
        if (fullName.value,NOFamily.value,NOMale.value,NOFemale.value,address.value,city.value ) {
          popupText.value='Success'
          let tempFormFamily: formTypeFamily = {
          fullName: fullName.value,
          address: address.value,
          city: city.value,
          NOFamily: NOFamily.value,
          NOMale: NOMale.value,
          NOFemale: NOFemale.value,
        };
        formSevice.editFormFamily(props.currentIndex,tempFormFamily);
       
        }else{
            popupText.value='Fail'
            }
            emit('onClosePopup')
            emit('onFormEdit',popupText.value)
         
      }
           
                return {fullName,NOFamily,NOMale,address,city,NOFemale,closePopup,addForm  };
            },
            
        });
          </script>
    
    
    <template>
            <base-popup   @on-close-popup="closePopup">
            <template #content>   
                <form action="" class="container max-w-screen-lg" @submit.prevent>
        <div class="bg-white rounded shadow-lg px-4 p-8 mb-6">
          <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div class="text-gray-600">
              <p class="font-medium text-lg">family Details</p>
              <p>Please fill out all the fields.</p>
            </div>
            <div class="lg:col-span-2">
              <div class="grid gap-4 gap-y-2 text-sm grid-cols-1">
                <div class="col-span-5">
                  <label for="full_name">Full Name</label>
                  <input
                  required
                    type="text"
                    name="full_name"
                    id="full_name"
                    class="h-10 border mt-1 px-4 w-full"
                    v-model="fullName"
                  />
                </div>
                <div class="lg:col-span-3 col-span-5">
                  <label for="address">Address / Street</label>
                  <input
                  required
                    type="text"
                    id="address"
                    class="h-10 border mt-1 px-4 w-full"
                    placeholder=""
                    v-model="address"
                  />
                </div>
                <div class="lg:col-span-2 col-span-5">
                  <label for="city">City</label>
                  <input
                  required
                    type="text"
                    id="city"
                    class="h-10 border mt-1 px-4 w-full"
                    v-model="city"
                    placeholder=""
                  />
                </div>
  
                <div class="lg:flex col-span-6 w-full">
                  <div class="lg:mr-2">
                    <label for="family">Number of your family?</label>
                    <div class="h-10 w-28 flex border mt-1">
                      <input
                      required
                        id="family"
                        placeholder="0"
                        class="px-2 text-center w-full"
                        v-model="NOFamily"
                      />
                    </div>
                  </div>
  
                  <div class="lg:mx-4">
                    <label for="family">Number of Male?</label>
                    <div class="h-10 w-28 flex border mt-1">
                      <input
                      required
                        id="family"
                        placeholder="0"
                        class="px-2 text-center w-full"
                        v-model="NOMale"
                      />
                    </div>
                  </div>
                  <div class=" ">
                    <label for="family">Number of Female?</label>
                    <div class="h-10 w-28 flex border mt-1">
                      <input
                      required
                        name="family"
                        id="family"
                        placeholder="0"
                        class="px-2 text-center w-full"
                        v-model="NOFemale"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-span-5 text-end">
                  <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    @click="addForm"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      </template>
            </base-popup> 
    </template>
    