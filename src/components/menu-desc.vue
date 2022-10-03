<script lang="ts">
import { defineComponent } from "vue";
import LinkIcon from "./link-icon.vue";

export default defineComponent({
  components: { LinkIcon },
  props: { desc: { type: Array, required: true } },
  setup() {
    return {};
  },
});
</script>
<template>
  <div class="bg-white h-full ">
    <div class="flex flex-col  bg-gray-100 -mt-1">
      <div
        v-for="(item, index) in desc"
        :key="index"
        class="mt-4 text-sm font-normal "
      >
      
        <a   class="hover:text-red-500 ">
          <router-link
                    :to="item.Add || item.code"
                    v-if="item.Add || item.code   "
  
                  >
                  {{ item.text }}
                  </router-link>
      </a>
      </div>
    </div>
  </div>
</template>
