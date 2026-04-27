<template>
    <div class="p-2 justify-center mx-auto">
        <h1 class="text-2xl font-bold text-center">STOCKS ET MOUVEMENTS</h1>
        <div class="justify-center items-center mx-auto p-2 m-6">
        <p class="text-2xl text-center"> Toutes les entrées, sorties et remplacements de cartouche sont içi </p>
        </div>

        <div class="flex gap-2 p-2">
            <div class="bg-blue-500 rounded-sm font-bold">
                <button @click="show('A')" class="text-white p-2 cursor-pointer hover:gb-">MOUVEMENTS DE STOCK</button>
            </div>
            <div class="bg-blue-500 rounded-sm font-bold">
                <button @click="show('B')" class="text-white p-2 cursor-pointer hover:gb-">REMPLACEMENT DE CARTOUCHE</button>
            </div>

            <div class="bg-blue-500 rounded-sm font-bold">
                <button @click="show('B')" class="text-white p-2 cursor-pointer hover:gb-">STOCK</button>
            </div>

            <div class="bg-green-500 rounded-sm font-bold">
                <button @click="show('B')" class="text-white p-2 cursor-pointer hover:gb-">TELECHARGER</button>
            </div>
        </div>

        <div class="grid grid-cols-12 gap-4 mt-2">
            <div class="col-span-12">
                <component :is="currentview"/>
            </div>
        </div>
        
    </div>
    
</template>
<script setup>

import { ref } from 'vue';
import ListAssignation from '../components/ListAssignation.vue';
import ListMouvement from '../components/ListMouvement.vue';

const currentview = ref(null)

const showmap = {
    A : ListMouvement,
    B : ListAssignation
}

currentview.value = showmap["A"]

const show = (type) => {
    currentview.value = showmap[type]
}

</script>