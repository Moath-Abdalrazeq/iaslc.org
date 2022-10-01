
<template>
    <div v-if="filesDispaly" > 
      <img  :src="files" accept="image/*" >  
    </div>
    <div class="grid place-items-center mx-auto h-96">  
     <input multiple type="file"   @input="handleInput">
    </div>
</template>
<script lang="ts">
    import { defineComponent, ref  } from "vue";
     export default defineComponent({
      components: {
       
      },
      setup() {
        let files =ref({})
        let filesDispaly=ref(false)
     function handleInput(e : InputEvent) : void{
      files.value=URL.createObjectURL(e.target.files[0])
      filesDispaly.value=true
    }
      
    return {  files,filesDispaly,  handleInput};
      },
    });
    </script>