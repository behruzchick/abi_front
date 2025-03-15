<script lang='ts' setup>
import {defineAsyncComponent, ref} from 'vue'

const ApexChart = defineAsyncComponent(() => import('vue3-apexcharts'));
const chartOptions = ref({
  chart: {
    type: 'line'
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr']
  }
});

const chartSeries = ref([
  {
    name: 'Sales',
    data: [0, 2, 3, 2 , 3,4,5,6,7,8, 9, 10, 11, 12, 13, 14,3,3,4,5,6,7]
  },
  {
    name: 'Test',
    data: [0, 2, 3, 2 , 3,4,5,6,7,8, 9, 10, 11, 12, 13, 14,7,5,4,45,2,7]
  },
  {
    name: 'Test',
    data: [0, 2, 3, 2 , 3,4,5,6,7,48, 9, 10, 2, 42, 13, 1,2,5,4,39,2,7]
  },
]);
</script>

<template>
    <div class="py-5 px-4 w-1/2">
        <ClientOnly>
             <ApexChart :options="chartOptions" :series="chartSeries"/>
        </ClientOnly>
    </div>
</template>