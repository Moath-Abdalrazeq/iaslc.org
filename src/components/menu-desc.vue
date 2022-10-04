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
  <div class=" group bg-white h-full ">
    <div class=" block -mt-3">
      <div
        v-for="(item, index) in desc"
        :key="index"
        class="mt-4 text-sm font-normal "
      >
        <a   class="hover:text-red-500 ">
          <router-link
              :to="item.code"
               v-if="item.code"
                 >
             {{ item.text }}
          </router-link>
      </a>
      </div>
    </div>
  </div>
</template>
