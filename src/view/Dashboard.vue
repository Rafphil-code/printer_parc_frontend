<template>

<div class="p-8">
    <h2 class="text-center text-3xl p-2 mb-4">BIENVENUE SUR LA VUE GLOBALE </h2>
    <div class="grid grid-cols-3 grid-rows-2 items-start gap-4 justify-center">
        <div class= " h-full font-semibold bg-indigo-200 rounded-lg text-center p-4 shadow-lg cursor-pointer hover:bg-gray-800 hover:text-white transition-color duration-500">
            <h3 class="text-3xl">Addresse du réseau</h3>
            <font-awesome-icon icon="ethernet" />
            <p class=" text-2xl"> {{  }} </p>
        </div>

        <div class= " h-full font-semibold bg-green-200 rounded-lg text-center p-4 shadow-lg cursor-pointer hover:bg-gray-800 hover:text-white transition-color duration-500
        hover:gb-gray-800">
            <h3 class="text-3xl">Nombre d'imprimantes</h3>
            <font-awesome-icon icon="print" />
            <p class=" text-2xl"> {{ printer_number }} </p>
            
        </div>

        <div class= " h-full font-semibold bg-yellow-200 rounded-lg text-center p-4 shadow-lg cursor-pointer hover:bg-gray-800 hover:text-white transition-color duration-500
        hover:gb-gray-800">
            <h3 class="text-3xl">Nombre d'Alertes</h3>
            <font-awesome-icon icon="triangle-exclamation" />
            <p class=" text-2xl"> {{ alert_number }} </p>
        </div>

        <div class= " h-full font-semibold bg-red-200 rounded-lg text-center p-4 hover:bg-gray-800 hover:text-white transition-color duration-500">
            <h3 class="text-3xl"> Plus sollicitée</h3>
            <font-awesome-icon icon="bolt" />
            <p class=" text-2xl"> {{ most_printer_used }} </p>
        </div>

        <div class= " h-full font-semibold bg-gray-200 rounded-lg text-center p-4 shadow-lg cursor-pointer hover:bg-gray-800 hover:text-white transition-color duration-500
        hover:gb-gray-800">
            <h3 class="text-3xl"> Moins sollicitée</h3>
            <font-awesome-icon icon="temperature-low" />
            <p class=" text-2xl"> {{ less_printer_used  }} </p>
        </div>
        
    </div>
</div>

</template>

<script setup>

import { ref, onMounted } from 'vue';
import { generalinfo } from '../api/overview';
const network_address = ref()
const printer_number = ref()
const alert_number = ref()
const most_printer_used = ref()
const less_printer_used = ref()

onMounted(
    async () => {
        const result = await generalinfo()
        printer_number.value = result.nb_printers
        alert_number.value = result.nb_alerts
        most_printer_used.value = result.hight_printers[0][0]
        less_printer_used.value = result.low_printers[0][0]
        console.log(printer_number.value)

    }
)
</script>