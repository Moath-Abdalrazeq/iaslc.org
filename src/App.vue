<script lang="ts">
import { defineComponent } from 'vue'
import homePage from './components/home-page.vue'

export default defineComponent({
  components: { homePage },
  setup() {
    
  },
})
</script>


<template>
  <home-page></home-page>
    <router-view/>
</template>

 
