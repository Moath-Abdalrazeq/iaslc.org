<template> 
<p>Click on the   logo to download the image:</p> 
<a :href="logo" download>
  <img :src="logo" alt="W3Schools" width="104" height="142">
</a>

</template>

<script lang="ts">
    import { defineComponent, ref } from "vue";
    import logo from "@/assets/logo.jpg"

    export default defineComponent({
      components: {
       
      },
      setup() {
    
    
      
        return { logo};
      },
    });
    </script>

    