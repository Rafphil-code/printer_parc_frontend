<template>

    <div class="p-2 justify-center mx-auto">
        <h4 class="font-bold text-center ">RAPPORTS D'UTILISATION JOURNALIÈRE</h4>
        <div class="flex gap-4">
            <button class="rounded-lg font-semibold bg-gray-500 text-white p-2">Filtrer par date</button>
            <button class="rounded-lg font-semibold bg-gray-500 text-white p-2">Filtrer par Imprimante</button>
        </div>
        <div class="justify-center items-center flex flex-col w-5/6 p-6 mx-auto">
            <table class="table-auto w-full border-collapse">
                <thead>
                    <th class="border border-gray-300 p-2 bg-gray-100">Imrpimante</th>
                    <th class="border border-gray-300 p-2 bg-gray-100">Nombre</th>
                    <th class="border border-gray-300 p-2 bg-gray-100">Cons</th>
                    <th class="border border-gray-300 p-2 bg-gray-100">Jour</th>
                </thead>
                <tbody>
                <tr>
                    <td class="p-2 border border-gray-300 items-center justifey-center text-center">C2630 IR</td>
                    <td class="p-2 border border-gray-300 items-center justifey-center text-center">150 Pages</td>
                    <td class="p-2 border border-gray-300 items-center justifey-center text-center">5%</td>
                    <td class="p-2 border border-gray-300 items-center justifey-center text-center">09/03/26</td>
                </tr>
                <tr>
                    <td class="p-2 border border-gray-300 items-center justifey-center text-center">C2630 IR</td>
                    <td class="p-2 border border-gray-300 items-center justifey-center text-center">150 Pages</td>
                    <td class="p-2 border border-gray-300 items-center justifey-center text-center">5%</td>
                    <td class="p-2 border border-gray-300 items-center justifey-center text-center">09/03/26</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>
<script setup>
import { onMounted, ref } from 'vue';
import { getStats } from '../api/stats';

const counters_stats = ref()

onMounted(
    async () => {
        const statistics = await getStats()
        counters_stats.value = statistics.all_daily_counters
        console.log(counters_stats.value)
    }
)
</script>