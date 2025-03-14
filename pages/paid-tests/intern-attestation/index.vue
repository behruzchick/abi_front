<script setup lang="ts">

import AppSelect from "~/components/select/AppSelect.vue";
import AppButton from "~/components/button/AppButton.vue";
</script>

<template>
  <div class="w-full flex items-center justify-center">
    <div class="flex flex-col gap-8 border-2 border-gray shadow-sm rounded-md px-8 py-8">
      <div clas="flex flex-col gap-4">
        <span><span class="text-red-700">*</span>Fan</span>
        <AppSelect :selections="['Musiqa Madaniyati','Boshlangich talim' , 'Biologiya']"/>
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