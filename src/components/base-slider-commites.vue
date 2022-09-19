<template>
  <div class="bg-slate-100 py-10 lg:mx-0 mx-4">
    <div class="flex justify-center text-3xl">COMMITTEES</div>
    <hr class="m-auto mt-3 mb-3 w-32 border border-red-800 bg-red-900" />
    <div
      class="flex text-center italic m-auto text-lg ml-3 lg:ml-0 mr-2 lg:mr-0 lg:max-w-8xl"
    >
      Serving on an IASLC committee in a volunteer capacity, members contribute
      their specialized skills and talents to help define the work of the
      organization, develop educational content, shape the association's
      messaging, plan annual meetings, contribute to publications authored by
      the IASLC, and more.
    </div>
    <!-- small    -->
    <div class="flex justify-center lg:hidden w-full">
      <div v-for="(slid, index) in tempSlideSmall" :key="index" class="mt-8">
        <div>
          <committes-slide
            :slidData="slid"
            @on-video-click="videoClicked"
          ></committes-slide>
        </div>
      </div>
    </div>
    <!-- large -->
    <div class="lg:flex lg:justify-evenly lg:w-full hidden">
      <div v-for="(slid, index) in tempSlide" :key="index" class="mt-8">
        <div>
          <committes-slide
            :slidData="slid"
            @on-video-click="videoClicked"
          ></committes-slide>
        </div>
      </div>
    </div>
    <div class="flex justify-end mr-6 items-end mt-8">
      <button @click="prev" class="bg-white w-10 h-10 mr-1">
        <previous-heroicon class="h-5 ml-2 text-red-500"></previous-heroicon>
      </button>
      <button @click="next" class="bg-white w-10 h-10">
        <next-heroicon class="h-5 ml-2 text-red-500"></next-heroicon>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { getcommitesData, setcommites } from "../services/base-committes";
import { defineComponent, onMounted, ref } from "vue";
import previousHeroicon from "./previous-heroicon.vue";
import NextHeroicon from "./next-heroicon.vue";
import MenuDesc from "./menu-desc.vue";
import basePopup from "./base-popup.vue";
import CommittesSlide from "./committes-slide.vue";
type commitesDataType = {
  firstImg: string;
  title: string;
  desc: string;
  link: string;
  id: number;
  video: string;
}[];
export default defineComponent({
  components: {
    previousHeroicon,
    NextHeroicon,
    MenuDesc,
    basePopup,
    CommittesSlide,
  },
  setup() {
    let currentSlide = ref(3);
    let currentSlideSmall = ref(1);
    let tempIndex = ref(0);
    let tempSmall = ref(0);
    let tempSlide = ref<commitesDataType>([]);
    let tempSlideSmall = ref<commitesDataType>([]);
    let CommitesData = ref<commitesDataType>(getcommitesData());
    function getId(id: number) {
      setcommites(id);
    }
    function initSlids() {
      tempSlide.value = [];
      for (let i = tempIndex.value; i < CommitesData.value.length; i++) {
        if (i < currentSlide.value) {
          tempSlide.value.push(CommitesData.value[i]);
        }
      }
    }
    //function ,   small ...................................
    function initSlidsSmall() {
      tempSlideSmall.value = [];
      for (let i = tempSmall.value; i < CommitesData.value.length; i++) {
        if (i < currentSlideSmall.value) {
          tempSlideSmall.value.push(CommitesData.value[i]);
        }
      }
    }
    function prev() {
      if (tempIndex.value > 0 || tempSmall.value > 0) {
        currentSlide.value = currentSlide.value - 1;
        tempIndex.value = tempIndex.value - 1;
        currentSlideSmall.value = currentSlideSmall.value - 1;
        tempSmall.value = tempSmall.value - 1;

        initSlids();
        initSlidsSmall();
      }
    }
    function next() {
      if (
        CommitesData.value.length - 1 >= currentSlide.value ||
        CommitesData.value.length - 1 >= currentSlideSmall.value
      ) {
        currentSlide.value = currentSlide.value + 1;
        tempIndex.value = tempIndex.value + 1;
        currentSlideSmall.value = currentSlideSmall.value + 1;
        tempSmall.value = tempSmall.value + 1;

        initSlids();
        initSlidsSmall();
      }
    }
    function init() {
      initSlids();
      initSlidsSmall();
    }
    onMounted(init);

    let showPopup = ref(false);
    function videoClicked() {
      showPopup.value = true;
    }
    function closePopup(close: boolean) {
      showPopup.value = close;
    }

    return {
      currentSlide,
      CommitesData,
      prev,
      next,
      tempSlide,
      initSlids,
      getId,
      currentSlideSmall,
      tempSlideSmall,
      videoClicked,
      closePopup,
      showPopup,
    };
  },
});
</script>
