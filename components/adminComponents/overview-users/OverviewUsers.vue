<script lang="ts" setup>
import block from './block.vue'
</script>


<template>
    <div class="w-full rounded-md py-4 px-4 shadow-md">
        <h3 class="font-bold">Overview</h3>
        <div class="border-2 border-gray-100 rounded-md px-4 mt-4 flex justify-between items-start">
            <block 
                title="Total users"
                content="2,043"
            />
            <block 
                title="Active users"
                content="543"
            />
            <block 
                title="Bought tests"
                content="3,220"
            />
            <block 
                title="Active tests"
                content="12"
            />
            
        </div>
    </div>
</template>