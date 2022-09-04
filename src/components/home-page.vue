<template>
     <div class=" bg-contain h-96 lg:bg-cover  bg- w-full bg-fixed bg-no-repeat  " :style="{'background-image': `url(${headerImg})`  }" >

    <menu-header></menu-header>
    <members-hub-card></members-hub-card>
     </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import menuHeader from './menu-header.vue'
import headerImg from '../assets/img-header.jpg'
import MembersHubCard from './members-hub-card.vue'
export default defineComponent({
    components:{menuHeader, MembersHubCard},
    setup() {
        return{headerImg}
    },
})
</script>
