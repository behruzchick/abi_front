<script setup lang="ts">
import UserConverstion from '../components/adminComponents/converstion/UserConverstion.vue';
import OverviewUsers from '../components/adminComponents/overview-users/OverviewUsers.vue';
import ActiveQuizes from '../components/adminComponents/activeQuizs/ActiveQuizes.vue';

</script>

<template>
      <overview-users />
      <div class="flex justify-between pt-8">
            <user-converstion />
            <active-quizes />
      </div>
</template>

<style scoped>

</style>