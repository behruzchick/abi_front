<script setup lang="ts">

import AppButton from "../button/AppButton.vue";
</script>

<template>
  <div class="flex flex-col items-end gap-5 pb-5">
    <label>
      Hozirgi parol:
      <input
          type="password"
          class="border-2 border-gray-800 duration-300 ease-in-out rounded-md px-2 hover:border-violet-700 hover:shadow-md focus-visible::border-violet-700"
      >
    </label>
    <label>
      Yangi parol:
      <input
          type="password"
          class="border-2 border-gray-800 duration-300 ease-in-out rounded-md px-2 hover:border-violet-700 hover:shadow-md focus-visible::border-violet-700"
      >
    </label>
    <label>
      Yangi parolni takrorlash:
      <input
          type="password"
          class="border-2 border-gray-800 duration-300 ease-in-out rounded-md px-2 hover:border-violet-700 hover:shadow-md focus-visible::border-violet-700"
      >
    </label>
    <AppButton title="Ozgartirish" :bordered="false"></AppButton>
  </div>
</template>

<style scoped>

</style>