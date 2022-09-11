<template>
    <div class="">
        <div class="  h-96 sticky " :style="{'background-image': `url(${lungPhoto})`  }" ></div>
        <div class="flex justify-center font-bold text-center text-white  ">
    <h1 class="text-3xl uppercase absolute  top-32 ">International Lung Cancer Foundation</h1>
    <p class="absolute top-48 "> Accelerating the pace of thoracic malignancy research and funding the next generation of lung <br> cancer luminaries. The ILCF inspires hope through research. </p>
</div>

<div class=" justify-around  flex text-base text-black bg-orange-500 p-4 mx-10 ">
    <a href="#">Donor Recognition</a>
    <a href="#">Research Grant program</a>
    <a href="#">Grant Recipient Spotlights</a>
    <a href="#">Research Grant Recipients</a>

</div>
<div class=" justify-between block  ">
<h1 class=" text-center mt-8 text-3xl mb-8 "> Current Giving Opportunities </h1>
<div class="justify-around  flex">  

    <div class="  h-screen bg-no-repeat	 w-full " :style="{'background-image': `url(${labImg})`  }" ></div>
    <div class="  max-h-96 bg-no-repeat	 w-full " :style="{'background-image': `url(${womanImg})`  }" ></div>

</div>
</div>
</div>

</template>
<script lang="ts">
import { defineComponent } from 'vue'
import lungPhoto from '../assets/lung.jpg'
import labImg from '../assets/lab.jpg'
import womanImg from '../assets/woman1.jpg'

export default defineComponent({
    setup() {
        return{lungPhoto,labImg,womanImg}
    },
})
</script>
