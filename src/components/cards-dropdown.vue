<template>
  <div class="flex justify-around my-10">
    <div class="  ">
      <div class="flex flex-wrap justify-between">
        <div
          v-for="(card, index) in annualCards"
          :key="index"
          class="mb-8 p-2 flex flex-col bg-gray-100 h-auto w-[40%]"
        >
          <button @click="cardClickedLeft(index)" class="w-full">
            <div
              class="flex justify-between text-lg h-10 font-bold mb-2 hover:text-red-500"
            >
              <span class="my-auto">{{ card.lable }}</span>
              <span class="text-red-700 my-auto"
                ><PlusHeroicon></PlusHeroicon
              ></span>
            </div>
          </button>

          <card-dropdown
            :card="card"
            v-if="index === currentIndexLeft"
          ></card-dropdown>
        </div>
      </div>

      <!-- <div class="flex flex-col">
        <div
          v-for="(card, index) in tempCardsRight"
          :key="index"
          class="mb-6 px-2 bg-gray-100"
        >
          <button @click="cardClickedRight(index)">
            <div
              class="flex text-lg font-bold mb-2 w-[33rem] h-10 justify-between hover:text-red-500"
            >
              {{ card.lable }}
              <span class="text-red-700"><PlusHeroicon></PlusHeroicon></span>
            </div>
          </button>

          <card-dropdown
            :card="card"
            v-if="index === currentIndexRight"
          ></card-dropdown>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { annualCards } from "../services/base-cards";
import NextHeroicon from "./next-heroicon.vue";
import PlusHeroicon from "./plus-heroicon.vue";
import cardDropdown from "./card-dropdown.vue";

export default defineComponent({
  components: { NextHeroicon, PlusHeroicon, cardDropdown },
  setup() {
    let tempCardsLeft = ref([]);
    let tempCardsRight = ref([]);
    let cards = ref(annualCards);
    let currentIndexLeft = ref(-1);
    let currentIndexRight = ref(-1);

    function initCards() {
      for (let i = 0; i < cards.value.length; i++) {
        if (i < 7) {
          tempCardsLeft.value.push(cards.value[i]);
        } else {
          tempCardsRight.value.push(cards.value[i]);
        }
      }
    }
    function cardClickedLeft(index: number) {
      if (currentIndexLeft.value !== -1) {
        currentIndexLeft.value = -1;
      } else {
        currentIndexLeft.value = index;
      }
    }

    function cardClickedRight(index: number) {
      if (currentIndexRight.value !== -1) {
        currentIndexRight.value = -1;
      } else {
        currentIndexRight.value = index;
      }
    }

    function init() {
      initCards();
    }

    onMounted(init);

    return {
      currentIndexRight,
      currentIndexLeft,
      cardClickedLeft,
      tempCardsLeft,
      tempCardsRight,
      cardClickedRight,
      annualCards,
    };
  },
});
</script>
