<script setup lang="ts">
  import AppButton from "~/components/button/AppButton.vue";

  defineProps<{
    title:string,
    price:number,
    imageUrl:string,
    url:string
  }>()
</script>

<template>
    <div class="flex flex-col">
        <img :src="imageUrl" class="w-full size-60 z-5 rounded-t flex-grow-1">
      <div class="border-2 border-gray-200 z-3 rounded-b pb-3">
        <div class="flex flex-col px-5 py-3">
          <b class="text-balance">{{title}}</b>
          <span class="text-violet-700">Narxi: {{price}} som</span>
        </div>
        <NuxtLink :to="'/paid-tests' + url" class="px-5">
          <AppButton title="Test ishlash" :bordered="false" />
        </NuxtLink>
      </div>
    </div>
</template>

<style scoped>

</style>