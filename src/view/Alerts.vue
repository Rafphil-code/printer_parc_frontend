<template>
    <div class="p-2 justify-center mx-auto">
        <h1 class="text-2xl font-bold text-center">ALERTES</h1>
        <div class="justify-center items-center mx-auto p-2 m-6">
        <p class="text-2xl text-center"> Ayez une vue globale sur les urgences </p>
        </div>
        <table class="table-auto border-collapse w-full">
            <thead>
                <tr class="">
                    <th class="bg-indigo-200 border border-gray-300 px-4 py-2 bg-gray-100">Imprimante</th>
                    <th class="bg-indigo-200 border border-gray-300 px-4 py-2 bg-gray-100">Consumable</th>
                    <th class="bg-indigo-200 border border-gray-300 px-4 py-2 bg-gray-100">Niveau</th>
                    <th class="bg-indigo-200 border border-gray-300 px-4 py-2 bg-gray-100">Status</th>
                    <th class="bg-indigo-200 border border-gray-300 px-4 py-2 bg-gray-100">Date</th>
                </tr>
            </thead>
            <tbody v-for="(value, key) in alerts">
                <tr v-for="(item, index) in value">
                    <td class="border border-gray-200 p-2" :rowspan="value.length" v-if="index == 0"> {{ key }} </td>
                    <td class="border border-gray-200 p-2"> {{ item.consumable }} </td>
                    <td class="border border-gray-200 p-2"> {{ item.current_level }} % </td>
                    <td class="border text-red-500 border-gray-200 p-2"> <p v-if="item.is_resolved == false">Non Résolu</p></td>
                    <td class="border border-gray-200 p-2"> {{ item.created_at }} </td>
                </tr>
            </tbody>  
        </table>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { getalerts } from '../api/alerts';

const alerts = ref()

onMounted(
    async () => {
        alerts.value = await getalerts()
        console.log(alerts.value)
    }
)
</script>