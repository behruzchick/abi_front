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
        <span>1-fan (10 ta savol)</span>
        <AppSelect :selections="['Ona tili (majburiy)']"/>
      </div>
      <div clas="flex flex-col gap-4">
        <span>2-fan (10 ta savol)</span>
        <AppSelect :selections="['Matematika (majburiy)']"/>
      </div>
      <div clas="flex flex-col gap-4">
        <span>3-fan (10 ta savol)</span>
        <AppSelect :selections="['O\'zbekiston tarixi (majburiy)']"/>
      </div>
      <div clas="flex flex-col gap-4">
        <span><span class="text-red-700">*</span>4-fan (30 ta savol)</span>
        <AppSelect :selections="['Name','Als']"/>
      </div>
      <div clas="flex flex-col gap-4">
        <span><span class="text-red-700">*</span>4-fan (30 ta savol)</span>
        <AppSelect :selections="['Name','Als']"/>
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