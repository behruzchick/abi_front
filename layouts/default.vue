<script setup lang="ts">

import Sidebar from "../components/aside/Sidebar.vue";
import Header from "../components/header/Header.vue";
import Footer from "../components/footer/Footer.vue";
</script>

<template>
  <section class="flex font-mono min-h-screen">
    <Sidebar />
    <div class="w-full relative">
      <Header />
      <main class="px-8 py-8 overflow-hidden overflow-y-auto h-[600px] scrollable">
        <slot />
      </main>
      <Footer />
    </div>
  </section>
</template>


<style scoped>
::-webkit-scrollbar {
  width:10px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #363978;
  min-height: 40px;
}
</style>

<style scoped>

</style>