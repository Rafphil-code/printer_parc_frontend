<template>
  <div v-if="show" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg p-6 sm:w-45 md:w-150">
      
        <h2 class="text-xl mb-4 justify-center flex gap-2 "> Mis À Jour <p class="font-semibold">{{ printer_update.name }}</p> </h2>

        <div id="form_layout">
            <form action="" class="max-w-md mx-auto">
                <div class="mb-5">
                    <label for="name" class="block mb-2 text-sm font-medium">Name</label>
                    <input v-model="printer_update.name"  class=" border-2 border-gray-200 text-sm w-full p-2">
                </div>
                <div class="mb-5">
                    <label for="name" class="block mb-2 text-sm font-medium">IP Address</label>
                    <input v-model="printer_update.ip_address" class="border border-gray-200 text-sm w-full p-2">
                </div>
                <div class="mb-5">
                    <label for="name" class="block mb-2 text-sm font-medium">Model</label>
                    <select class="w-full rounded-md p-2 focus:outline-none focus:ring-gray-200 focus:border-gray-200" v-model="printer_update.printer_model_id" name="" id="">
                        <option class="text-white bg-indigo-500" v-for="model in models" :value="model.id"> {{ model.model }} </option>
                    </select>
                </div>
                <div class="mb-5">
                    <label for="name" class="block mb-2 text-sm font-medium">Location</label>
                    <input v-model="printer_update.location" class=" border border-gray-200 text-sm w-full p-2">
                </div>
                <div class="mb-5">
                    <label for="name" class="block mb-2 text-sm font-medium">SNMP Community</label>
                    <input v-model="printer_update.snmp_community" class=" border border-gray-200 text-sm w-full p-2">
                </div>
            </form>
        </div>
      
      <div class="flex justify-between">
        <button class="p-2 bg-indigo-200 cursor-pointer rounded-md" @click="$emit('close')">Fermer</button>
        <button class="p-2 bg-indigo-200 cursor-pointer rounded-md" @click="$emit('submit', printer_update)">Soumettre</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, computed, watch } from 'vue';
const props = defineProps({
    printer:Object,
    show:Boolean,
    models:Array,
})
const printer_update = ref()
watch(() => props.printer, (newPrinter) => {
    if(newPrinter){
        printer_update.value = {
        name : newPrinter.name,
        ip_address : newPrinter.ip_address,
        location : newPrinter.location,
        snmp_community : newPrinter.snmp_community,
        id : newPrinter.id,
        created_at : newPrinter.created_at,
        printer_model_id : newPrinter.printer_model_id
        }
    }
}, {immediate : true})
// Je viens d'apprendre que watch surveille un élément, il prends deux arguments : ce qu'il doit surveiller et la fonction à exécuter
// il passe par défaut la nouvelle version de l'élément qui a changé à cette fonction callback

defineEmits(['close', 'submit']) // Je viens d'apprendre qu'içi on déclare des évènements qu'on émets vers le parent

</script>