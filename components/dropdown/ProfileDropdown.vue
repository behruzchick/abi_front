<script setup lang="ts">

import {MenuItem, MenuItems} from "@headlessui/vue";
</script>

<template>
  <transition enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
    <MenuItems
        class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden">
      <div class="py-1">
        <MenuItem v-slot="{ active , close }">
          <NuxtLink
              to="/profile"
          >
            <button @click="close" class="px-4 py-2 border-b-2 border-gray-200 w-full flex gap-4 hover:bg-gray-200 duration-150">
              <img src="/avatar-default.svg" class="size-8 rounded-full">
              <div class="flex flex-col items-start">
                <b >behruz_akbaraliev</b>
                <span class="text-gray-400">Oddiy</span>
              </div>
            </button>
          </NuxtLink>
        </MenuItem>
        <MenuItem v-slot="{ active , close }">
          <NuxtLink
              to="/profile"
          >
            <button @click="close" :class="[active ? 'bg-gray-100 text-gray-900 outline-hidden' : 'text-gray-700' , 'block px-4 py-2 text-sm flex items-center gap-2 w-full']">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd"
                      d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                      clip-rule="evenodd"/>
              </svg>
              Profil
            </button>
          </NuxtLink>
        </MenuItem>
        <form method="POST" action="#">
          <MenuItem v-slot="{ active , close }">
            <button type="submit"
                    @click="close"
                    :class="[active ? 'bg-gray-100 text-gray-900 outline-hidden' : 'text-gray-700', 'block w-full px-4 py-2 text-left text-sm flex items-center gap-2']">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd" d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z" clip-rule="evenodd" />
              </svg>

              Logout
            </button>
          </MenuItem>
        </form>
      </div>
    </MenuItems>
  </transition>
</template>

<style scoped>

</style>