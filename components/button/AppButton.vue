<script setup lang="ts">
  defineProps<{
    title:string,

    bordered:boolean,
  }>()
</script>

<template>
  <button :class="[
      bordered ?
      'border-2 px-8 rounded-md hover:border-violet-700 duration-150 active:shadow-md'
      : 'px-8 bg-violet-700 text-white rounded-md py-1 hover:bg-violet-600 duration-150 active:shadow-md active:bg-violet-900'

  ]">
    {{title}}
  </button>
</template>

<style scoped>

</style>