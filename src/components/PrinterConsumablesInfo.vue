<template>
  <div v-if="show" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div class="bg-white rounded-md p-6 min-w-96 shadow-lg">
      <div v-for="(key, value) in cons_info">
        <h5>{{ value }} : </h5>
        <div class="relative flex items-center w-full bg-gray-200 rounded-full h-4 mb-4">
          <h4 class="absolute block p-4 text-white text-center font-bold" >{{ key }} %</h4>
          <div class="bg-blue-600 h-4 rounded-full" :style="{ width: key + '%' }"> </div>
        </div>
      </div>
      <button class="p-2 bg-indigo-200 cursor-pointer rounded-md" @click="$emit('close')">Fermer</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, watch, ref } from 'vue';
import {getConsumables} from '../api/conumables'
const props = defineProps({
    printer:Object,
    show:Boolean
})

const cons_info = ref()

watch( () => props.printer, async (newPrinter) => {
  if(newPrinter){
    cons_info.value = await getConsumables(newPrinter.id)
    
  }
})

defineEmits(['close']) // Je viens d'apprendre qu'içi on déclare des évènements qu'on émets vers le parent

</script>