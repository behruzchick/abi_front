<script setup lang="ts">

import AppButton from "../button/AppButton.vue";
</script>

<template>
    <div class="flex items-center gap-12">
      <div class="flex flex-col items-end">
        <div class="flex flex-col items-end gap-5 pb-5">
          <label>
            ism:
            <input
                class="border-2 border-gray-800 duration-300 ease-in-out rounded-md px-2 hover:border-violet-700 hover:shadow-md focus-visible::border-violet-700"
            >
          </label>
          <label>
            Familiya:
            <input
                class="border-2 border-gray-800 duration-300 ease-in-out rounded-md px-2 hover:border-violet-700 hover:shadow-md focus-visible::border-violet-700"
            >
          </label>
          <label>
            Otasining ismi:
            <input
                class="border-2 border-gray-800 duration-300 ease-in-out rounded-md px-2 hover:border-violet-700 hover:shadow-md focus-visible::border-violet-700"
            >
          </label>
        </div>
        <div class="flex items-center gap-4">
          <AppButton title="Saqlash" :bordered="false" />
          <AppButton title="Tozalash" :bordered="true" />
        </div>
      </div>
      <div class="flex flex-col items-center">
          <img src="/avatar-default.svg" class="rounded-full w-32">
          <input type="file" class="mt-4 border-2 w-25 rounded-md file:hidden" />
      </div>
    </div>
</template>

<style scoped>

</style>