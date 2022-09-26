<template>
  <DoughnutChart :chartData="testData" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { DoughnutChart } from "vue-chart-3";

import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default defineComponent({
  name: "Home",
  components: { DoughnutChart },
  setup() {
    const testData = {
      labels: ["Paris", "Nîmes", "Toulon", "Perpignan", "Autre"],
      datasets: [
        {
          data: [33.04, 10, 7, 6, 3, 2, 1.48, 1, 2, 0.7, 0.4, 0.2, 0.42],
          backgroundColor: [
            "#123E6B",
            "#cc0000",
            "#3d85c6",
            "#123E6B",
            "#cc0000",
            "#3d85c6",
            "#123E6B",
            "#cc0000",
            "#3d85c6",
            "#123E6B",
            "#cc0000",
            "#3d85c6",
          ],
        },
      ],
    };

    return { testData };
  },
});
</script>
