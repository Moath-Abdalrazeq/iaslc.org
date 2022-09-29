<template>
    <div class="bg-blue-300 p-4 mt-4  ">
  <base-tabs class="w-11/12 lg:w-10/12 mx-auto" @on-tab-click="tabClick"  :tabs-names="tabsNames" >
      <template   #tabPanel> 
        <div v-for="(data,index) in tabList" :key="index">
             <span v-if="tabclicked===index">{{data.content}}</span> 
        </div>
         </template>
    </base-tabs>
  </div>
</template>
<script lang="ts">
    import { defineComponent, onMounted, ref } from "vue";
    import baseTabs from "@/components/base-tabs.vue";
    export default defineComponent({
      components: {baseTabs},
      setup( ) {
        let tabList=ref(
            [{
        tab:"Tab 1", 
        content:"content1"
       } ,
       {
        tab:"Tab 2", 
        content:"content2"
       } ,
       {
        tab:"Tab 3", 
        content:"content3"
       } ,
       {
        tab:"Tab 4", 
        content:"content4"
       } ,
    ]
        )
       let tabsNames =ref<string[]>([])
        let tabclicked=ref<number>(0)
    function initTabsNames( ) {
        for (let i = 0; i < tabList.value.length; i++) {
            tabsNames.value.push(tabList.value[i].tab)
            
        }
    }
    function tabClick(index:number) {
        tabclicked.value=index
    }
    function init( ) {
        initTabsNames()
    }
    onMounted(init)
        return { tabList ,tabsNames,tabClick ,tabclicked};
      },
    });
    </script>