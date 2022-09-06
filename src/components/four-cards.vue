<template>
  <div class="flex justify-around ml-8 mr-8">
    <div class="px-4">
      <div
        class="max-w-sm bg-white duration-200 hover:scale-105 hover:shadow-xl"
      >
        <img :src="imgCardOne" />
        <div class="p-5 h-52">
          <span class="text-xs text-red-600">ILCN ARTICLE</span>
          <p
            class="text-medium mb-5 mt-4 hover:text-red-600 hover:cursor-pointer"
          >
            FDA’s Review of Single-Country ‘Me Too’ Drugs: A Clinical Trialist
            Perspective
          </p>
        </div>
        <span class="flex justify-end text-xs">MAY 24, 2022</span>
      </div>
    </div>
    <div class="px-4">
      <div
        class="max-w-sm bg-white duration-200 hover:scale-105 hover:shadow-xl"
      >
        <img :src="imgCardTwo" />
        <div class="p-5 h-52">
          <span class="text-xs text-red-600">ILCN ARTICLE</span>
          <p
            class="text-medium mb-5 mt-4 hover:text-red-600 hover:cursor-pointer"
          >
            Panel Explores Emerging Treatments and Sequencing Strategies for
            Patients with Advanced NSCLCs Driven by Rare Oncogenes
          </p>
        </div>
        <span class="flex justify-end text-xs">MAY 24, 2022</span>
      </div>
    </div>
    <div class="px-4">
      <div
        class="max-w-sm bg-white duration-200 hover:scale-105 hover:shadow-xl"
      >
        <img :src="imgCardThree" />
        <div class="p-5 h-48">
          <span class="text-xs text-red-600">Journal article</span>
          <p
            class="text-medium mb-5 mt-4 hover:text-red-600 hover:cursor-pointer"
          >
            COVID-19 Outcomes, Patient Vaccination Status, and Cancer-Related
            Delays during the Omicron Wave: A Brief Report from the TERAVOLT
            Analysis
          </p>
        </div>
        <div class="text-xs">Jennifer G. Whisenant</div>
        <span class="text-xs flex justify-between"
          >+more
          <span class="flex justify-end text-xs"> May 18, 2022 </span>
        </span>
      </div>
    </div>
    <div class="px-4">
      <div
        class="max-w-sm bg-white duration-200 hover:scale-105 hover:shadow-xl"
      >
        <img :src="imgCardFour" />
        <div class="p-5 h-52">
          <span class="text-xs text-red-600">Podcast</span>
          <p
            class="text-medium mb-5 mt-4 hover:text-red-600 hover:cursor-pointer"
          >
            Smoking Cessation with Matt Steliga, Jamie Ostroff, and Jim Pantelas
          </p>
        </div>
        <span class="flex justify-end text-xs">May 17, 2022</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import imgCardOne from "../assets/imge-card-one.jpg";
import imgCardTwo from "../assets/imge-card-two.jpg";
import imgCardThree from "../assets/imge-card-three.jpg";
import imgCardFour from "../assets/imge-card-four.jpg";

export default defineComponent({
  setup() {
    return { imgCardOne, imgCardTwo, imgCardThree, imgCardFour };
  },
});
</script>
