<script lang="ts">
import { defineComponent, ref } from "vue";
import ArrowRightHero from "./arrow-right-hero.vue";
import MenuDesc from "./menu-desc.vue";
import LinkIcon from "./link-icon.vue";
import ArrowHover from "./arrow-hover.vue";
export default defineComponent({
  components: { ArrowRightHero, MenuDesc, LinkIcon, ArrowHover },
  props: {
    index: { type: Number, required: true },
    pages: { type: Object, required: true },
  },
  setup() {
    let showDesc = ref(false);
    let descHover = ref<object[]>([]);
    function descClick(desc: object[]) {
      descHover.value = desc;
      showDesc.value = !showDesc.value;
    }
    return { descClick, descHover, showDesc };
  },
});
</script>
<template>
  <div
    v-if="pages.sub"
    class="group border-b-2 lg:border-b-0 my-2 lg:my-0 mx-4 lg:mx-0"
  >
    <div class="flex lg:px-2 justify-between ml-4 lg:ml-0">
      {{ pages.label }}

      <arrow-hover class="h-6 lg:hidden"></arrow-hover>
    </div>

    <div class="hidden group-hover:flex lg:absolute text-black">
      <div>
        <div
          v-for="(page, index) in pages.sub"
          :key="index"
          class="bg-white px-5 py-3 lg:hover:border-b-2 lg:hover:border-b-red-600"
        >
          <button @mouseover="descClick(page.desc)" class="flex">
            <router-link
                    :to="page.code"
                    v-if="page.code  "
                    class="lg:mx-4 ml-4 lg:ml-0"
                     
                  >
                    {{ page.label }}
                  </router-link>
            <span v-if="page.label === pages.label">
              <arrow-right-hero></arrow-right-hero>
            </span>

            <span
              v-if="
                page.label === 'Virtual Library' ||
                page.label === 'Search ILCN' ||
                page.label === 'WCLC 2022 News' ||
                page.label === 'Become a Member' ||
                page.label === 'Renew Your Membership'
              "
            >
              <link-icon class="h-6 text-red-600"></link-icon>
            </span>
          </button>
        </div>
      </div>
      <div v-if="descHover && showDesc">
        <menu-desc :desc="descHover" class="px-5 py-5 flex"></menu-desc>
      </div>
    </div>
  </div>
</template>
