<template>
    <div class="justify-center p-2">
        
        <div class="flex p-2">
            <table class="table-auto w-full border-collapse">
                <thead>
                    <th class="border border-gray-300 p-2 bg-indigo-100">Cartouche</th>
                    <th class="border border-gray-300 p-2 bg-indigo-100">Quantité</th>
                    <th class="border border-gray-300 p-2 bg-indigo-100">Type</th>
                    <th class="border border-gray-300 p-2 bg-indigo-100">Motif</th>
                    <th class="border border-gray-300 p-2 bg-indigo-100">Date</th>
                </thead>
                <tbody>
                    <tr v-for="movement in movements">
                        <td class="border border-gray-300 p-2  font-semibold"> {{ movement.cons_name }} </td>
                        <td class="border border-gray-300 p-2  font-semibold"> {{ movement.quantity }} </td>
                        <td :class="{'bg-red-200' : movement.movement_type == 'out', 'bg-green-200' : movement.movement_type == 'in'}" class="border border-gray-300 p-2  font-semibold"> {{ movement.movement_type }} </td>
                        <td class="border border-gray-300 p-2  font-semibold"> {{ movement.reason }} </td>
                        <td class="border border-gray-300 p-2  font-semibold"> {{ movement.created_at }} </td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    </div>
</template>

<script setup>
import { getmovements } from '../api/stock_and_mouvements';
import { ref, onMounted } from 'vue';

const movements = ref()

onMounted(
    async () => {
        const result = await getmovements()
        movements.value = result
        console.log(movements.value)
    }
)
</script>