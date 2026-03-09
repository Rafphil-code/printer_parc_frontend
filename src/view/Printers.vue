<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold text-center">GESTION DES IMPRIMANTES</h1>
    <div class="justify-center items-center mx-auto p-2 m-6">
      <p class="text-2xl"> Içi vous pouvez gérer avec aisance toutes vos imprimantes </p>
    </div>
    <table class="table-auto w-full border-collapse">
      <thead>
        <tr>
          <th class="border border-gray-300 px-4 py-2 bg-gray-100">Imprimantes</th>
          <th class="border border-gray-300 px-4 py-2 bg-gray-100">Address IP</th>
          <th class="border border-gray-300 px-4 py-2 bg-gray-100">Poll</th>
          <th class="border border-gray-300 px-4 py-2 bg-gray-100">Détails</th>
          <th class="border border-gray-300 px-4 py-2 bg-gray-100">Consumables</th>
          <th class="border border-gray-300 px-4 py-2 bg-gray-100">Modifier</th>
          <th class="border border-gray-300 px-4 py-2 bg-gray-100">Supprimer</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in printers">
          <td class="border border-gray-300 px-2 items-center py-2 font-semibold">{{ item.name }}</td>
          <td class="border border-gray-300 px-2 items-center py-2 font-semibold">{{ item.ip_address }}</td>
          <td class="border border-gray-300 px-2 text-center py-2">
            <button @click="poll_printer(item)" class="cursor-pointer  px-2 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg 
            hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300">Check</button>
          </td>
          <td class="border border-gray-300 px-2 text-center py-2">
            <button @click="open_details(item)" class="cursor-pointer  px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg 
            hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300">Voir les Détails</button>
          </td>
          <td class="border border-gray-300 px-2 flex gap-2 text-center py-2">
            <button @click="open_history(item)" class="cursor-pointer  px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg 
            hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300">Voir les consumables</button>
            <button @click="open_history(item)" class="cursor-pointer  px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg 
            hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300">Remplacer</button>
          </td>
          <td class="border border-gray-300 px-2 text-center py-2">
            <button @click="open_update(item)" class="cursor-pointer  px-4 py-2 text-sm font-medium text-white bg-yellow-600 rounded-lg 
            hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300">Modifier l'Imprimante</button>
          </td>
          <td class="border border-gray-300 px-2 text-center py-2">
            <button class="cursor-pointer  px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg 
            hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="">
  <ModalDetail @close="close_details"  :printer="modal_printer" :show="show_details" />
  <PrinterConsumablesInfo @close="close_history" :printer="modal_printer" :show="show_history"  />
  <PrinterUpdate @close="close_update" @submit="update_printer" :printer="modal_printer" :models="models" :show="show_update" />
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import ModalDetail from '../components/ModalDetail.vue';
import PrinterUpdate from '../components/PrinterUpdate.vue';
import { getprinters } from '../api/printers';
import { getmodels } from '../api/models';
import { updatePrinter } from '../api/printers';
import PrinterConsumablesInfo from '../components/PrinterConsumablesInfo.vue';
import { pollPrinter } from '../api/conumables';
const printers = ref()
const models = ref() 
onMounted(
  async () => {
    [printers.value, models.value] = await Promise.all([getprinters(), getmodels() ])
  }
)
const modal_printer = ref()

const show_details = ref(false)
const show_history = ref(false)
const show_update = ref(false)



const open_details = (printer) => {
  show_details.value = true
  modal_printer.value = printer
}
const close_details = () => {
  show_details.value = false
}

const open_update = (printer) => {
  show_update.value = true
  modal_printer.value = printer
}
const close_update = () => {
  show_update.value = false
}

const open_history = (printer) => {
  show_history.value = true
  modal_printer.value = printer
}
const close_history = () => {
  show_history.value = false
}

const update_printer = async (printer) => {
  show_update.value = false
  console.log(printer)
  const result_of_updating = await updatePrinter(printer.id, printer)
  printers.value = await getprinters()
  console.log(result_of_updating)
}

const poll_printer = async (printer) => {
  const result = await pollPrinter(printer.id)
  if(result){
    printers.value = await getprinters()
    console.log(result)
  }
}

</script>