<script setup lang="ts">

import AppTable from "~/components/table/AppTable.vue";

const tbData = [
  {
    id:1,
    date:'2024-05-54',
    score:34.5,
    type:"Test"
  },
  {
    id:2,
    date:'2024-05-54',
    score:34.5,
    type:"Test"
  }
]
</script>

<template>
    <AppTable :heads="['Id' , 'Sana va vaqt' , 'Bal' , 'Turi']" :data="tbData"/>
</template>

<style scoped>

</style>