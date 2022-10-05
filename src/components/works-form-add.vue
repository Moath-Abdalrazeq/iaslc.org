<script lang="ts">
import { defineComponent, ref } from "vue";
import FormSevice, { formTypeWork } from "../services/forms-service";
import BaseNavigator from "./base-navigator.vue";
export default defineComponent({
  setup() {
    const formSevice = FormSevice;
    let name = ref("");
    let email = ref("");
    let experience = ref("");
    let message = ref("");
    let Cv = ref(File);
    let select = ref("");
    function addForm() {
      let typeformWork: formTypeWork = {
        name: name.value,
        email: email.value,
        experience: experience.value,
        message: message.value,
        Cv: Cv.value,
        select: select.value,
      };
      formSevice.setFormWork(typeformWork);
    }
    return { name, email, experience, message, Cv, select, addForm };
  },
  components: { BaseNavigator },
});
</script>

<template>
  <BaseNavigator></BaseNavigator>
  <div class="md:w-96 md:max-w-full m-auto">
    <div class="">
      <form @submit.prevent>
        <label class="mb-6">
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
            v-model="message"
            class="block w-full mt-1 border-black border py-1 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            rows="3"
            placeholder="What motivates you?"
          ></textarea>
        </label>
        <label class="block mb-6">
          <span class="text-gray-700 font-bold">Your CV</span>
          <input
            required
            v-on="Cv"
            type="file"
            class="block w-full mt-1 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <div class="mb-6">
          <div class="mt-2">
            <div>
              <p class="font-bold">Please select your favorite language:</p>

              <input type="radio" v-model="select" />
              <label>Android</label><br />

              <input type="radio" v-model="select" />
              <label>Web</label><br />
            </div>
          </div>
        </div>
        <div class="mb-6">
          <button
            type="submit"
            class="h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800"
            @click="addForm"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
