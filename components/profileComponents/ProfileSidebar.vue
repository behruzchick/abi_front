<script setup lang="ts">

import {Tab, TabList} from "@headlessui/vue";
</script>

<template>
  <TabList class="flex flex-col items gap-4">
    <Tab v-slot="{ selected }" as="template">
      <button
          :class="[
              'px-4 py-2 rounded-md transition',
              selected ? 'bg-gray-800 text-white' : 'text-gray-700 hover:bg-gray-200'
            ]"
      >
        Asasiy malumotlar
      </button>
    </Tab>
    <Tab v-slot="{ selected }" as="template">
      <button
          :class="[
              'px-4 py-2 rounded-md transition',
              selected ? 'bg-gray-800 text-white' : 'text-gray-700 hover:bg-gray-200'
            ]"
      >
        Parolni ozgartirish
      </button>
    </Tab>
  </TabList>
</template>

<style scoped>

</style>