<template>
  <div v-if="show" class="fixed inset-0 bg-black/50 backdrop-blur flex items-center justify-center z-50">
    <div class="bg-white rounded-lg p-6 sm:w-45 md:w-150">
        <h2 class="text-xl mb-4 justify-center flex gap-2 "> Achat de cartouche  <p class="font-semibold"></p> </h2>

        <div id="form_layout">
            <form action=""  class="max-w-md mx-auto">
                <div class="mb-5">
                    <label for="" class="block mb-2 text-sm font-medium">Quantité Entrée</label>
                    <input v-model="consin.quantity" class="border-2 border-gray-200 text-sm w-full p-2">
                </div>

                <div class="mb-5">
                    <label for="" class="block mb-2 text-sm font-medium">Motif</label>
                    <input  v-model="consin.reason" class="border-2 border-gray-200 text-sm w-full p-2">
                </div>
                <div class="flex gap-2 font-semibold">
                    <button type="button" @click="$emit('close')" class="bg-gray-500 p-2 cursor-pointer">Fermer</button>
                    <button type="button" @click="$emit('submit', consin)" class="bg-green-700 p-2 cursor-pointer text-white">Enregistrer</button>
                </div>
            </form>
        </div>
      
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, computed, watch } from 'vue';
const props = defineProps({
        show : Boolean,
        item : Object
    })

const consin = ref()

watch( () => props.item, (newitem) => {
        consin.value = {
            consumable_id : newitem.consumable_id,
            quantity : newitem.quantity,
            movement_type : "in",
            reason : "Achat de cartouche"
        }
    }
)

defineEmits(['close', 'submit'])
</script>