<template>
    <div class="p-2 justify-center mx-auto">
        <h1 class="text-2xl font-bold text-center">ALERTES</h1>
        <div class="justify-center items-center mx-auto p-2 m-6">
        <p class="text-2xl text-center"> Ayez une vue globale sur les urgences </p>
        </div>
        <table class="table-auto border-collapse w-full">
            <thead>
                <tr class="">
                    <th class="border border-gray-300 p-2 bg-indigo-100">Imprimante</th>
                    <th class="border border-gray-300 p-2 bg-indigo-100">Consumable</th>
                    <th class="border border-gray-300 p-2 bg-indigo-100">Niveau</th>
                    <th class="border border-gray-300 p-2 bg-indigo-100">Status</th>
                    <th class="border border-gray-300 p-2 bg-indigo-100">Date</th>
                </tr>
            </thead>
            <tbody v-for="(value, key) in alerts">
                <tr class="odd:bg-white even:bg-slate-50" v-for="(item, index) in value">
                    <td class="border border-gray-200 p-2" :rowspan="value.length" v-if="index == 0"> {{ key }} </td>
                    <td :class="{'text-blue-500': item.consumable.includes('Cyan'), 'text-yellow-500': item.consumable.includes('Yellow'), 'text-black-500': item.consumable.includes('Black'), 'text-red-700': item.consumable.includes('Magenta')}" class="border border-gray-200 p-2"> {{ item.consumable }} </td>
                    <td class="border border-gray-200 p-2"> {{ item.current_level }} % </td>
                    <td v-if="item.is_resolved == false" class="border text-red-500 border-gray-200 p-2"> <p>Non Résolu</p></td>
                    <td v-if="item.is_resolved == true" class="border text-green-500 border-gray-200 p-2"> <p>Résolu</p></td>
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