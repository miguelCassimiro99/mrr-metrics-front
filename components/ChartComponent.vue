<template>
  <div class="bg-[#272953] rounded-[8px] h-full w-full">
    <apexchart
      :key="series"
      :height="props.height"
      width="100%"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  height: String;
}>();

const options = ref({
  chart: {
    height: 316,
    type: "line",
  },
  stroke: {
    width: [0, 4],
  },
  title: {
    text: "Traffic Sources",
    style: {
      color: "#fff",
    },
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1],
  },
  labels: [
    "01 Jan 2001",
    "02 Jan 2001",
    "03 Jan 2001",
    "04 Jan 2001",
    "05 Jan 2001",
    "06 Jan 2001",
    "07 Jan 2001",
    "08 Jan 2001",
    "09 Jan 2001",
    "10 Jan 2001",
    "11 Jan 2001",
    "12 Jan 2001",
  ],
  xaxis: {
    type: "datetime",
    labels: {
      style: {
        colors: "#fff", // ["#fff"] -> for adding a different color for each label
      },
    },
  },
  yaxis: [
    {
      title: {
        text: "Website Blog",
        style: {
          color: "#fff",
        },
      },
      labels: {
        style: {
          colors: "#fff", // ["#fff"] -> for adding a different color for each label
        },
      },
    },
    {
      opposite: true,
      title: {
        text: "Social Media",
        style: {
          color: "#fff",
        },
      },
      labels: {
        style: {
          colors: "#fff",
        },
      },
    },
  ],
});
const series = ref([
  {
    name: "Score",
    data: [] as any,
    type: "column",
  },
]);
const updateChart = () => {
  //generate array of random numbers of length 10
  const data = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 100)
  );

  series.value = [
    {
      name: "Website Blog",
      type: "column",
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
    },
    {
      name: "Social Media",
      type: "line",
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
    },
  ];
};
onMounted(() => {
  updateChart();
});
</script>
