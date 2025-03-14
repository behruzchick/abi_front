<script setup lang="ts">
  import { TabGroup } from '@headlessui/vue'
  import ProfileMain from "../../components/profileComponents/ProfileMain.vue";
  import ProfileSidebar from "../../components/profileComponents/ProfileSidebar.vue";

</script>

<template>
  <TabGroup>
    <div class="flex items-start gap-4 pt-8">
        <ProfileSidebar />
        <ProfileMain />
    </div>
  </TabGroup>
</template>

<style scoped>

</style>