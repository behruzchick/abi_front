<script setup lang="ts">

import {TabPanel, TabPanels} from "@headlessui/vue";
import ProfileDetails from "./ProfileDetails.vue";
import ProfilePasswordChange from "./ProfilePasswordChange.vue";

</script>

<template>
  <TabPanels class="border-l-2 pl-8 border-gray-300">
    <TabPanel>
      <ProfileDetails />
    </TabPanel>
    <TabPanel>
      <ProfilePasswordChange />
    </TabPanel>
  </TabPanels>
</template>

<style scoped>

</style>