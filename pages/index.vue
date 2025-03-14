<script setup lang="ts">


import AppButton from "~/components/button/AppButton.vue";
</script>

<template>
    <div class="flex items-start gap-6">
      <div class="flex flex-col items-start border-2 w-72 border-gray-200 rounded-xl py-5 px-3">
        <span class="mb-2">O'rtacha ball:</span>
        <b class="text-xl mb-4">0.0</b>
        <NuxtLink to="/paid-tests">
          <AppButton title="Test ishlash" :bordered="false" />
        </NuxtLink>
      </div>
      <div class="flex flex-col items-start border-2 w-72 border-gray-200 rounded-xl py-5 px-3">
        <span class="mb-2">Hisob:</span>
        <b class="text-xl mb-4">0 som</b>
        <NuxtLink to="/payments">
          <AppButton title="Toldirish" :bordered="false" />
        </NuxtLink>
      </div>
    </div>
</template>

<style scoped>

</style>