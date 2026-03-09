<template>

<div class="p-8">
    <div class="grid grid-cols-3 grid-rows-2 items-start gap-4 justify-center">
        <div class= " h-full font-semibold bg-gray-200 rounded-lg text-center p-4 shadow-lg cursor-pointer hover:bg-gray-800 hover:text-white transition-color duration-500">
            <h3 class="text-3xl">Addresse du réseau</h3>
            <p class=" text-2xl"> {{ network_address }} </p>
        </div>

        <div class= " h-full font-semibold bg-gray-200 rounded-lg text-center p-4 shadow-lg cursor-pointer hover:bg-gray-800 hover:text-white transition-color duration-500
        hover:gb-gray-800">
            <h3 class="text-3xl">Nombre d'imprimantes</h3>
            <p class=" text-2xl"> {{ printer_number }} </p>
        </div>

        <div class= " h-full font-semibold bg-gray-200 rounded-lg text-center p-4 shadow-lg cursor-pointer hover:bg-gray-800 hover:text-white transition-color duration-500
        hover:gb-gray-800">
            <h3 class="text-3xl">Nombre d'Alertes</h3>
            <p class=" text-2xl"> {{ alert_number }} </p>
        </div>

        <div class= " h-full font-semibold bg-gray-200 rounded-lg text-center p-4 hover:bg-gray-800 hover:text-white transition-color duration-500">
            <h3 class="text-3xl"> Imprimante la plus sollicitée</h3>
            <p class=" text-2xl"> {{ most_printer_used.name }} </p>
            <p class="font-semibold text-2xl"> {{ most_printer_used.address }} </p>
            <p class="font-semibold text-2xl"> Record : {{ most_printer_used.record }} </p>
        </div>

        <div class= " h-full font-semibold bg-gray-200 rounded-lg text-center p-4 shadow-lg cursor-pointer hover:bg-gray-800 hover:text-white transition-color duration-500
        hover:gb-gray-800">
            <h3 class="text-3xl"> Imprimante la moins sollicitée</h3>
            <p class=" text-2xl"> {{ less_printer_used.name }} </p>
            <p class="text-2xl"> {{ less_printer_used.address }} </p>
            <p class="text-2xl"> Record : {{ less_printer_used.record }} </p>
        </div>
        
    </div>
</div>

</template>

<script setup>

import { ref } from 'vue';
const printer_number = ref(5)
const network_address = ref("192.168.12.0/24")
const alert_number = ref(2)
const most_printer_used = ref({
    name : "Canon C3326iR",
    address : "192.168.12.9/24",
    record : "80/100"
})

const less_printer_used = ref({
    name : "HP M479fdw",
    address : "192.168.12.45/24",
    record : "20/100"
})
</script>