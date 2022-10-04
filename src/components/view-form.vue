<script lang="ts">
    import { defineComponent  } from "vue";
    import FormSevice, { formType }  from '../services/forms-service'

    export default defineComponent({
 
      setup() {
        const formSevice=FormSevice
 let forms=formSevice.getForm()
          return {  forms };
      },
      components: {   }
  });
    </script>
    
  <template>
 {{forms}}
 </template>