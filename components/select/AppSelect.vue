<script setup lang="ts">
import { ref } from 'vue'
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'

const props = defineProps<{ selections: string[] }>()


const selectedMenu = ref(props.selections[0] ?? '')
</script>

<template>
  <div class="w-72">
    <Listbox v-model="selectedMenu">
      <div class="relative mt-1">
        <ListboxButton
            class="relative w-full border-2 border-gray-200 cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left cursor-pointer hover:border-indigo-900 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
        >
          <span class="block truncate">{{ selectedMenu }}</span>
        </ListboxButton>

        <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
          <ListboxOptions
              class="absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
          >
            <ListboxOption
                v-slot="{ active, selected }"
                v-for="select in selections"
                :key="select"
                :value="select"
                as="template"
            >
              <li
                  :class="[
                  active ? 'bg-gray-200' : 'text-gray-900',
                  'relative select-none py-2 pl-10 pr-4 duration-300 z-100 cursor-pointer',
                ]"
              >
                <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']">
                  {{ select }}
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>

<style scoped>
    .scrollbar::-webkit-scrollbar{
        opacity: ;
    }
</style>