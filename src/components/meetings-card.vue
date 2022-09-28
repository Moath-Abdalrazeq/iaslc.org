<script lang="ts">
import { defineComponent, ref } from "vue";
import card1 from "../assets/meetings-cards/card1.jpg";
import card2 from "../assets/meetings-cards/card2.jpg";
import card3 from "../assets/meetings-cards/card3.jpg";
import card4 from "../assets/meetings-cards/card4.jpg";
import NextHeroicon from "./next-heroicon.vue";
export default defineComponent({
  setup() {
    let cards = ref([
      {
        img: card1,
        desc: "The IASLC 2021 Targeted Therapies of Lung Cancer Meeting (TTLC21) was held February 17-20, 2021, as a worldwide virtual event. Meeting Chairs, Drs. Paul A. Bunn, Jr., Roy Herbst, Lecia Sequist, and Suresh Ramalingam, welcome dmore than 900 participants from 50 countries to share information about ongoing clinical trials of the newest therapies for lung cancer.",
        link: "",
      },
      {
        img: card2,
        desc: "This symposium was designed with new content delivery formats; IASLC pre-released 10+ hours of content while reserving the live program days, May 7-8, 2021, for more robust discussions and attendee engagement",
        link: "",
      },
      {
        img: card3,
        desc: "The fourth biennial IASLC Small Cell Lung Cancer Meeting was held as a Worldwide Virtual Event on October 29-30, 2021. The meeting focused on preclinical and clinical advances in small cell lung cancer (SCLC) research",
        link: "",
      },
      {
        img: card4,
        desc: "The 2021 LALCA Schools of Thoracic Oncology, chaired by Drs. Luis E. Raez, Ticiana Leal, Christian Rolfo, and Edgardo Santos, provided wide-ranging and multidisciplinary content across four schools—thoracic oncology, allied health professionals, advocacy, and pathology",
        link: "",
      },
    ]);
    return { cards, card1, card2, card3, card4 };
  },
  components: { NextHeroicon },
});
</script>
<template>
  <span
    class="flex justify-center w-52 text-center lg:w-full m-auto text-xl lg:text-4xl font-bold"
    >EDUCATION AND CONFERENCES</span
  >
  <hr class="mt-4 m-auto h-[0.14rem] w-32 bg-red-700 mb-5" />
  <p class="lg:w-[76rem] w-80 m-auto text-lg">
    This year it was imperative for the IASLC to execute impactful and
    interactive virtual conferences, given the continued, serious public health
    concerns and restrictions on travel and in-person gatherings due to
    COVID-19. As a result, the IASLC executed a portfolio of six fully virtual
    conferences with pre-recorded, live, and on-demand content. The WCLC 2021
    offered Meet the Expert sessions and Brain Exchange sessions, offering the
    opportunity for greater interactivity, engagement, and member connectivity
    in a virtual setting.
  </p>
  <button class="text-white bg-red-700 flex p-2 mt-8 mb-5 m-auto">
    READ MORE
  </button>
  <div class="my-10">
    <div class="flex justify-center text-2xl lg:text-4xl font-bold">
      2021 MEETINGS
    </div>
    <hr class="mt-4 m-auto h-[0.14rem] w-32 bg-red-700 mb-5" />
  </div>
  <div class="flex flex-col lg:flex-row px-7 lg:px-10 cursor-pointer">
    <div v-for="(info, index) in cards" :key="index" class="flex flex-col">
      <div class="hover:-translate-x-1 max-w-xs lg:max-w-lg my-5 p-4">
        <div class=""><img :src="info.img" /></div>
        <div class="bg-white shadow-2xl">
          <div class="text-left p-5 flex leading-7 h-[22rem]">
            {{ info.desc }}
          </div>
          <div class="flex justify-end text-red-600 font-bold px-2 py-3">
            Read More
            <span class="ml-1 mt-0.5"><NextHeroicon></NextHeroicon></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
