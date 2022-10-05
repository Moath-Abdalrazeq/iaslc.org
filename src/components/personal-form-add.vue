<script lang="ts">
import { defineComponent, ref } from "vue";
import FormSevice, { formType } from "../services/forms-service";
import baseNavigator from "./base-navigator.vue";
export default defineComponent({
  setup() {
    const formSevice = FormSevice;
    let fullName = ref("");
    let gender = ref("");
    let email = ref("");
    let address = ref("");
    let city = ref("");
    let country = ref("");
    let Zipcode = ref(0);
    function addForm() {
      let tempForm: formType = {
        fullName: fullName.value,
        gender: gender.value,
        email: email.value,
        address: address.value,
        city: city.value,
        country: country.value,
        Zipcode: Zipcode.value,
      };
      formSevice.setForm(tempForm);
    }
    return {
      fullName,
      gender,
      email,
      address,
      city,
      Zipcode,
      country,
      addForm,
    };
  },
  components: { baseNavigator },
});
</script>
<template>
  <base-navigator></base-navigator>
  <section
    class="min-h-screen p-6 bg-gray-100 flex items-center justify-center"
  >
    <form action="" @submit.prevent class="container max-w-screen-lg mx-auto">
      <div class="bg-white rounded shadow-lg p-8 px-4 mb-6">
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div class="text-gray-600">
            <p class="font-medium text-lg">Personal Details</p>
            <p>Please fill out all the fields.</p>
          </div>
          <div class="lg:col-span-2">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-5">
              <div class="col-span-5">
                <label for="full_name">Full Name</label>
                <input
                  type="text"
                  class="h-10 border mt-1 px-4 w-full"
                  v-model="fullName"
                />
              </div>
              <div>
                <div class="font-bold">Gender</div>
                <div class="flex">
                  <input type="radio" id="male" v-model="gender" />
                  <label
                    class="font-semibold py-2 px-4 cursor-pointer"
                    for="male"
                    >Male</label
                  >
                  <input type="radio" id="female" v-model="gender" />
                  <label
                    class="font-semibold py-2 px-4 cursor-pointer"
                    for="female"
                    >Female</label
                  >
                </div>
              </div>
              <div class="col-span-5">
                <label for="email">Email Address</label>
                <input
                  type="text"
                  id="email"
                  class="h-10 border mt-1 px-4 w-full"
                  placeholder="email@domain.com"
                  v-model="email"
                />
              </div>
              <div class="lg:col-span-3 col-span-5">
                <label for="address">Address / Street</label>
                <input
                  type="text"
                  id="address"
                  class="h-10 border mt-1 px-4 w-full"
                  v-model="address"
                />
              </div>
              <div class="lg:col-span-2 col-span-5">
                <label for="city">City</label>
                <input
                  type="text"
                  id="city"
                  class="h-10 border mt-1 px-4 w-full"
                  v-model="city"
                />
              </div>
              <div class="lg:col-span-2 col-span-5">
                <label for="country">Country / region</label>
                <input
                  id="country"
                  class="h-10 w-full flex border mt-1"
                  v-model="country"
                />
              </div>
            </div>

            <div class="lg:col-span-1 col-span-5">
              <label for="zipcode">Zipcode</label>
              <input
                type="text"
                id="zipcode"
                class="h-10 border mt-1 px-4 w-full"
                v-model="Zipcode"
              />
            </div>
            <div class="col-span-5 text-right">
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
    </form>
  </section>
</template>
