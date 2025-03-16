<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
    <button @click="router.back()" class="text-3xl hover:pl-2 duration-150 ease-in-out">
        &larr;
    </button>
</template>