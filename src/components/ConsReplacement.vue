<template>
  <div v-if="show" class="fixed inset-0 bg-black/50 backdrop-blur flex items-center justify-center z-50">
    <div class="bg-white rounded-lg p-6 sm:w-45 md:w-150">
        <h2 class="text-xl mb-4 justify-center flex gap-2 "> Remplacement de cartouche <p class="font-semibold"></p> </h2>

        <div id="form_layout">
            <form action=""  class="max-w-md mx-auto">
                <div class="mb-5">
                    <label for="" class="block mb-2 text-sm font-medium">Cartouche</label>
                    <select @input="newconsid" class="block w-full" name="">
                        <option :value="cons.id" v-for="cons in printer_cons"> {{ cons.name }} </option>
                    </select>
                </div>

                <div class="mb-5">
                    <label for="" class="block mb-2 text-sm font-medium">Quantité</label>
                    <input value="1" class="border-2 border-gray-200 text-sm w-full p-2">
                </div>
                <div class="flex gap-2">
            <button class="p-2 bg-indigo-200 cursor-pointer rounded-md" @click="$emit('close')">Fermer</button>
            <button type="button" class="p-2 bg-indigo-200 cursor-pointer rounded-md" @click="$emit('submit', replacement_object)">Valider</button>
                </div>
            </form>
        </div>
      
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, computed, watch } from 'vue';
import { getConsumableswithID } from '../api/conumables';

const printer_cons = ref()
const actual_cons = ref()
const replacement_object = ref()
const props = defineProps({
    show:Boolean,
    printer:Object
})

watch(() => props.printer, async (newPrinter) => {
    if(newPrinter){
        printer_cons.value = await getConsumableswithID(newPrinter.id)
        const printer_consval = printer_cons.value
        actual_cons.value = {
        consumable_id : printer_consval[0].id
    }

    replacement_object.value = {
    consumable_id : actual_cons.value.consumable_id,
    printer_id : props.printer.id,
    quantity : 1
        }
    }
} )

const newconsid = (e) => {
    actual_cons.value = {
        consumable_id : e.target.value
    }

    replacement_object.value = {
    consumable_id : actual_cons.value.consumable_id,
    printer_id : props.printer.id,
    quantity : 1
}
    
}

defineEmits(['close', 'submit'])

</script>