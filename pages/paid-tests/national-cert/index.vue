<script setup lang="ts">

import AppSelect from "~/components/select/AppSelect.vue";
import AppButton from "~/components/button/AppButton.vue";
import BackButton from "~/components/button/BackButton.vue";
</script>

<template>
  <div class="w-full flex items-start justify-center relative">
    <BackButton class="absolute left-0"/>
    <div class="flex flex-col gap-8 border-2 border-gray shadow-sm rounded-md px-8 py-8">
      <div clas="flex flex-col gap-4">
        <span><span class="text-red-700">*</span>Fan</span>
        <AppSelect :selections="['Tarix','Matematika']"/>
      </div>
      <div clas="flex flex-col gap-4">
        <span><span class="text-red-700">*</span>Til</span>
        <AppSelect :selections="['Ozbek']"/>
      </div>
      <AppButton title="Testni ishlash" :bordered="false" />
    </div>
  </div>
</template>

<style scoped>

</style>