<template>
  <div v-if="show" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg p-6 min-w-96 backdrop-blur-sm">

      <div v-for="(value, key, index) in printer">
        <h2 class="text-xl font-bold mb-4 flex gap-2"> {{ key }} :  <h5 class="font-semibold">  {{ value }} </h5> </h2>
      </div>
      
      <button class="p-2 bg-indigo-200 cursor-pointer rounded-md" @click="$emit('close')">Fermer</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
    printer:Object,
    show:Boolean
})
defineEmits(['close']) // Je viens d'apprendre qu'içi on déclare des évènements qu'on émets vers le parent

</script>