<template>
     <div class=" bg-contain h-96 lg:bg-cover  bg- w-full bg-fixed bg-no-repeat  " :style="{'background-image': `url(${headerImg})`  }" >

    <menu-header></menu-header>
     </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import menuHeader from './menu-header.vue'
import headerImg from '../assets/img-header.jpg'
export default defineComponent({
    components:{menuHeader},
    setup() {
        return{headerImg}
    },
})
</script>
