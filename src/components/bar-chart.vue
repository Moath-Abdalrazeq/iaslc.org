<script lang="ts">
import { defineComponent, h, PropType } from "vue";

import { Bar } from "vue-chartjs";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  Plugin,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default defineComponent({
  name: "BarChart",
  components: {
    Bar,
  },

  setup() {
    const chartData = {
      labels: [
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
      ],
      datasets: [
        {
          label: "data",
          backgroundColor: "#991b1b",
          data: [
            3.5, 4.2, 4, 3.8, 4.3, 5.8, 5, 4.5, 6.2, 10.1, 12.2, 12.5, 15.8, 18,
          ],
        },
      ],
    };
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
    };

    return () =>
      h(Bar, {
        chartData,
        chartOptions,
      });
  },
});
</script>
<template>
  <div>
    <BarChart />
  </div>
</template>
