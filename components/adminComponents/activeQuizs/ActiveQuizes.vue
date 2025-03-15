<script setup lang='ts'>
import AppButton from '../../button/AppButton.vue'
</script>

<template>
    <div class="w-1/2 py-4 px-4">
        <div class="flex items-start justify-between">
            <h3 class="font-bold text-2xl pb-4">Active quizes</h3>
            <app-button title="Create a new test" :bordered="true"/> 
        </div>
        <div>
            <table class="table-fixed text-left w-full">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="mt">
                        <td class="pt-4">1</td>
                        <td class="pt-4">Miliy Sertificat</td>
                        <td class="pt-4">10000 som</td>
                        <td class="pt-4">Active</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>