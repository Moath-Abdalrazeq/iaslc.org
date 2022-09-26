<script lang="ts">
import { defineComponent } from "vue";
import logo from "../assets/logo-responsive.jpg";
import footerlogo from "../assets/footer-logo.png";
export default defineComponent({
  components: {},

  setup() {
    return { logo, footerlogo };
  },
});
</script>
<template>
  <footer
    class="lg:p-10 p-4 border-t-2 border-solid mt-10 lg:font-semibold font-serif"
  >
    <div class="flex lg:justify-around flex-col lg:flex-row justify-center">
      <img :src="logo" class="w-80 h-24 mt-10 mb-8" />

      <div class="lg:mr-10 text-center lg:text-start">
        <div class="border-b-2 pb-6">
          <h1 class="mb-4">IASLC SITES</h1>
          <a class="hover:text-red-600 mr-2"> 2022 WCLC</a>
          <a class="hover:text-red-600 lg:px-6 px-2"> JTO CRR</a>
          <a class="hover:text-red-600 lg:px-6 px-2"> JTO</a>
          <a class="hover:text-red-600 lg:px-6 px-2"> ILCN</a>
          <a class="hover:text-red-600 lg:px-6 px-2"> Member Portal</a>
          <a class="hover:text-red-600 lg:ml-6 ml-2"> Virtual Library</a>
        </div>
        <div class="flex justify-between">
          <div class="text-xs font-normal">
            <div class="pt-6">
              <a class="hover:text-red-600 mr-2 lg:mr-0">Privacy Policy</a>
              <a class="lg:px-6 px-4 hover:text-red-600">Terms & Conditions</a>
              <a class="lg:px-6 px-4 hover:text-red-600">User Login</a>
              <button class="lg:px-6 px-4 pt-4 hover:text-red-600">
                Bylaws
              </button>
            </div>
            <div class="mt-6 flex justify-between lg:block">
              <div><img :src="footerlogo" class="w-16 h-16 lg:hidden" /></div>
              <div class="mt-4 lg:mt-0 mr-10 lg:mr-0">© 2022 IASLC</div>
            </div>
          </div>

          <img
            :src="footerlogo"
            class="w-16 h-16 mt-8 lg:-mr-14 lg:flex hidden"
          />
        </div>
      </div>
    </div>
  </footer>
</template>
