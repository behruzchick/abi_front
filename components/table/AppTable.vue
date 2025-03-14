<script setup lang="ts">
  defineProps<{
    heads:string[],
    data?:{
      id:number ,
      date:string,
      score:number,
      type:string,
    }[],
  }>()
</script>

<template>
  <div class="overflow-hidden rounded-t-lg border border-gray-300">
    <table class="table-fixed w-full text-left">
      <thead class="bg-gray-200">
      <tr>
        <th class="p-4 text-base font-semibold" v-for="item in heads">{{ item }}</th>
      </tr>
      </thead>
      <tbody v-if="data.length !== 0">
      <tr v-for="item in data" class="border-b-2 border-gray-200  hover:bg-gray-100 duration-150 ease-in-out">
        <td class="p-4">{{item?.id}}</td>
        <td class="p-4">{{item?.date}}</td>
        <td class="p-4">{{item.score}}</td>
        <td class="p-4">{{item.type}}</td>
      </tr>
      </tbody>
    </table>
    <div class="w-full flex items-center justify-center" v-if="data.length == 0">
      <div class="p-5 flex flex-col items-center">
        <MdiIcon icon="mdiPackageVariant" :size="100" />
        Hech narsa topilmadi!
      </div>
    </div>
  </div>

</template>

<style scoped>
</style>