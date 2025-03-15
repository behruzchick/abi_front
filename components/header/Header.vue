<script setup lang="ts">
import {useRoute} from "vue-router";

import {Menu, MenuButton} from '@headlessui/vue'
import ProfileDropdown from "../dropdown/ProfileDropdown.vue";

const route = useRoute();

const pageTitles = [
  { path: "/", title: "Asosiy" },
  { path: "/paid-tests", title: "Testlar" },
  { path: "/paid-tests/", title: "Test ishlash", match: "startsWith" },
  { path: "/test-attemp-results", title: "Natijalar" },
  { path: "/payments", title: "Tolovlar" },
  { path: "/user-complaints", title: "Etirozlar" },
  { path: "/bushliqlar", title: "Boshliqlar" },
  { path: "/profile", title: "Sozlamalar" },
  { path: "/admin", title: "Admin panel" }
];

const title = computed(() => {
  const found = pageTitles.find(p =>
      p.match === "startsWith" ? route.path.startsWith(p.path) : route.path === p.path
  );
  return found ? found.title : "Sahifa topilmadi"; // Заголовок по умолчанию
});
</script>

<template>
  <header class="w-full px-5 py-2 flex items-center justify-between shadow-md">
    <div>
      <h2 class="font-bold">
        {{title}}
      </h2>
    </div>
    <div>
      <Menu as="div" class="relative inline-block text-left">
        <div>
          <MenuButton
              class="inline-flex w-full justify-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs items-start">
            <img src="/avatar-default.svg" class="size-10 rounded-full">
            <div class="flex flex-col items-start">
              <b>Behruz Akbaraliev</b>
              <span class="text-gray-400 text-xs">behruz_akbaraliev</span>
            </div>
          </MenuButton>
        </div>
        <ProfileDropdown />
      </Menu>
    </div>
  </header>
</template>

<style scoped>

</style>