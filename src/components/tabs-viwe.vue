<template>
  <div class="bg-blue-300 p-4 mt-4">
    <base-tabs
      class="w-11/12 lg:w-10/12 mx-auto"
      @on-tab-click="tabClick"
      :tabs-names="tabsNames"
    >
      <template #tabPanel>
        <div v-for="(data, index) in tabList" :key="index">
          <div
            v-if="tabclicked === index"
            class="flex-grow bg-white rounded-lg shadow-xl p-4"
          >
            {{ data.content }}
          </div>
        </div>
      </template>
    </base-tabs>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import baseTabs from "@/components/base-tabs.vue";
export default defineComponent({
  components: { baseTabs },
  setup() {
    let tabList = ref([
      {
        tab: "Tab 1",
        content: "Content 1",
      },
      {
        tab: "Tab 2",
        content: "Content 2",
      },
      {
        tab: "Tab 3",
        content: "Content 3",
      },
      {
        tab: "Tab 4",
        content: "Content 4",
      },
    ]);
    let tabsNames = ref<string[]>([]);
    let tabclicked = ref<number>(0);
    function initTabsNames() {
      for (let i = 0; i < tabList.value.length; i++) {
        tabsNames.value.push(tabList.value[i].tab);
      }
    }
    function tabClick(index: number) {
      tabclicked.value = index;
    }
    function init() {
      initTabsNames();
    }
    onMounted(init);
    return { tabList, tabsNames, tabClick, tabclicked };
  },
});
</script>
