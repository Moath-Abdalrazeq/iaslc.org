<script lang="ts">
    import { defineComponent  } from "vue";
    import FormSevice, { formType }  from '../services/forms-service'

    export default defineComponent({
 
      setup() {
        const formSevice=FormSevice
 let forms=formSevice.getForm()
          return {  forms };
      },
      components: {   }
  });
    </script>
  <template>
    <div v-for="(data,index) in forms" :key="index">
      <div class="h-screen   w-full    p-6 bg-gray-100    ">
    <form action="" @submit.prevent class="container max-w-screen-lg m-auto">
        <div class="bg-white rounded shadow-lg p-8 px-4 mb-6 mt-32" >
          <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div class="text-gray-600">
              <p class="font-medium text-lg">Personal Details</p>
              <p>Please fill out all the fields.</p>
            </div>
            <div class="lg:col-span-2">
              <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-5">
                <div class="col-span-5">
                  <div type="text"    class="h-10 border mt-1  px-4 w-full">{{data.fullName}}</div>
                </div>
                 <div>
                  {{data.gender}}
                 </div>
                <div class=" col-span-5">
                  <div  class="h-10 border mt-1 px-4 w-full"   >
                    {{data.email}}
                  </div>
                </div>
                <div class="lg:col-span-3 col-span-5">
                  
                  <div  class="h-10 border mt-1  px-4 w-full" >{{data.address}}</div>
                </div>
                <div class="lg:col-span-2 col-span-5">
                  
                  <div class="h-10 border mt-1 px-4 w-full" >{{data.city}}</div>
                </div>
                <div class="lg:col-span-2 col-span-5">
                  <div   class="h-10 w-full flex border mt-1" >{{data.country}}</div>
                </div>
                  </div>
                 
                <div class="lg:col-span-1 col-span-5">
                 
                  <div  class="h-10 border mt-1 px-4 w-full" >{{data.Zipcode}}</div>
                </div>
                <div class="col-span-5 text-right">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                   >Save Edit</button>
                </div>
              </div>
            </div>
          </div>
      </form>
    </div>
    </div>
  
 </template>