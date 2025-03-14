<script setup lang="ts">


</script>

<template>
  <aside
      class="bg-white dark:bg-gray-800 w-64 min-h-screen flex flex-col transition-all duration-300 ease-in-out"
  >
    <div class="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
      <h1 class="text-2xl font-bold text-indigo-800 dark:text-white">Dashboard</h1>
    </div>
    <nav class="flex-1 overflow-y-auto">
      <ul class="p-4 space-y-2">
        <li>
          <NuxtLink v-slot="{selected}" to="/" class="flex items-center p-2 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors duration-300">
            <svg class="h-8 w-6 mr-0" fill="none" viewBox="0 0 23 18" stroke="currentColor">
              <MdiIcon icon="mdiHome"/>
            </svg>
            Asosiy
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/paid-tests" class="flex items-center p-2 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors duration-300">
            <svg class="h-6 w-6 mr-0" fill="none" viewBox="0 0 23 18" stroke="currentColor">
              <MdiIcon icon="mdiFileDocumentEdit"/>
            </svg>
            Test ishlash
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/test-attemp-results" class="flex items-center p-2 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors duration-300">
            <svg class="h-6 w-6 mr-3" fill="none" viewBox="0 0 23 18" stroke="currentColor">
              <MdiIcon icon="mdiPoll"/>
            </svg>
            Natijalar
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/payments" class="flex items-center p-2 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors duration-300">
            <svg class="h-6 w-6 mr-3" fill="none" viewBox="0 0 23 18" stroke="currentColor">
              <MdiIcon icon="mdiWalletBifold" />
            </svg>
            Pul otkazmalar
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/user-complaints" class="flex items-center p-2 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors duration-300">
            <svg class="h-6 w-6 mr-3" fill="none" viewBox="0 0 23 18" stroke="currentColor">
                <MdiIcon icon="mdiHelpCircleOutline" />
            </svg>
            Etirozlar
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/bushliqlar" class="flex items-center p-2 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors duration-300">
            <svg class="h-6 w-6 mr-3" fill="none" viewBox="0 0 23 18" stroke="currentColor">
              <MdiIcon icon="mdiAlertCircleOutline"/>
            </svg>
            Boshqalar
          </NuxtLink>
        </li>

      </ul>
    </nav>
  </aside>
</template>

<style scoped>

aside {
  transition: transform 0.3s ease-in-out;
}
</style>
