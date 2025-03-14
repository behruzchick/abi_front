<script setup lang="ts">

import TestCard from "~/components/test-card/TestCard.vue";
</script>

<template>
  <div class="flex items-center gap-8 flex-wrap justify-center">
    <TestCard title="Miliy Sertificat" :price="10000" image-url="/test-hand.jpg" url="/national-cert"/>
    <TestCard title="Attestatsiya-2025 ga tayyorgarlik" :price="10000" image-url="/test-pc.jpeg" url="/attestation" />
    <TestCard title="STAJOR-O‘QITUVCHILAR uchun diagnostik test" :price="10000" image-url="/test-mentor.jpg" url="/intern-attestation"/>
    <TestCard title="Abituriyentlar uchun test" :price="10000" image-url="/test-img.jpg" url="/abi"/>
  </div>
</template>

<style scoped>
  .scrollable::-webkit-scrollbar{
    display: none;
  }
</style>