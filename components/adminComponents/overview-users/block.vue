<script lang='ts' setup>
    defineProps<{
        title:string,
        content: string
    }>()
</script>

<template>
    <div class="py-4 px-4">
        <h1 class="text-gray-500">{{ title }}</h1>
        <b class="font-bold text-3xl">{{ content }}</b>
    </div>
</template>