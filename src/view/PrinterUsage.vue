<template>

    <div class="p-2 justify-center mx-auto">
        <h4 class="block p-4 mb-4  font-bold text-center ">RAPPORTS D'UTILISATION JOURNALIÈRE</h4>
        <p class="font-semibold text-center block p-2 mb-4">Générez vos rapports en toute fluidité</p>
        <div class="flex gap-4">
            <div class="flex gap-2">
                <button @click="show_some_filter(filters.date)" class="rounded-lg font-semibold bg-indigo-600 hover:bg-indigo-800 cursor-pointer text-white p-2">Filtrer par date</button>
                <div v-if="show_filtre_date" class="flex gap-2">
                    <div class="flex gap-2 items-center">
                        <p class="text-center font-bold">Début : </p>
                        <input v-model="filter_criterias.date_start" placeholder="" class="border cursor-pointer border-gray-300 bg-indigo-200 p-2 rounded-md leading-tight" type="date">
                    </div>
                    <div class="flex gap-2 items-center">
                        <p class="text-center font-bold">Fin : </p>
                        <input v-model="filter_criterias.date_end" placeholder="" class="border cursor-pointer border-gray-300 bg-indigo-200 p-2 rounded-md leading-tight" type="date">
                    </div>
                </div>
            </div>
            <div class="flex gap-2 items-center">
                <button @click="show_some_filter(filters.tri)" class="rounded-lg font-semibold bg-indigo-600 hover:bg-indigo-800 cursor-pointer text-white p-2">Trier</button>
                <select v-model="filter_criterias.order_by" v-if="show_tri" class=" p-2 cursor-pointer bg-gray-200 focus:outline-none" name="" id="1">
                    <option v-for="(value,key) in options" class="bg-indigo-200" :value="key"> {{ value }} </option>
                </select>
            </div>
            <div class="flex space-x-4">
                <button @click="show_some_filter(filters.search)" class="rounded-lg font-semibold bg-indigo-600 hover:bg-indigo-800 cursor-pointer text-white p-2">Rechercher</button>
                <input v-model="filter_criterias.printer_name" v-if="show_search" placeholder="Imprimante..." class="border border-gray-300" type="text">
            </div>
            <button @click="launchrequest" class="rounded-lg font-semibold bg-green-500 hover:bg-green-800 cursor-pointer text-white p-2">Lancer la Requête</button>
        </div>
        <div id="table" class="justify-center items-center flex flex-col w-full p-6 mx-auto">
            <table class="table-auto w-full border-collapse">
                <thead>
                    <th class="border border-gray-300 p-2 bg-indigo-100">Imrpimante</th>
                    <th class="border border-gray-300 p-2 bg-indigo-100">Nombre</th>
                    <th class="border border-gray-300 p-2 bg-indigo-100">Utilisation du Cons</th>
                    <th class="border border-gray-300 p-2 bg-indigo-100">Jour</th>
                </thead>
                <tbody>
                    <tr class="odd:bg-white even:bg-indigo-50" v-for="el in stats">
                        <td class="border border-gray-300 p-2  font-semibold"> {{ el.printer_name }} </td>
                        <td class="border border-gray-300 p-2 text-center font-semibold"> {{ el.printed_count }} </td>
                        <td class="border border-gray-300 p-2 text-center font-semibold">
                            <div class="flex flex-col text-left">
                                <p :class="{'text-blue-500': key.includes('Cyan'), 'text-yellow-500': key.includes('Yellow'), 'text-black-500': key.includes('Black'), 'text-red-700': key.includes('Magenta')}"
                                 v-for="(value, key) in el.uses"> {{ key }} : {{ value }} % </p>
                            </div>
                        </td>
                        <td class="border border-gray-300 p-2 text-center font-semibold"> {{ el.date_check }} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>
<script setup>
import { onMounted, reactive, ref, watch } from 'vue';
import { getStats } from '../api/stats';

const stats = ref()

const filter_criterias = reactive({
    "date_start" : "2026-03-03",
    "date_end" : "2026-03-09",
    "order_by" : "",
    "printer_name" : ""
}
)
//j'avais pas vraoment besoin de reactive() parceque pas à utiliser dans le DOM mais boff

const options = {
    "printer" : "Imprimante",
    "printed_count" : "Nombre de Pages"
}
const option_none = "None"
const show_filtre_date = ref(false)
const show_tri = ref(false)
const show_search = ref(false)

const filters = {
    "date" : show_filtre_date,
    "tri" : show_tri,
    "search" : show_search
}

watch(
    () => stats.value, (newcriterias) => {
        //console.log(newcriterias.value)
    },
    {deep:true}
)


onMounted(
    async () => {
        const statistics = await getStats(filter_criterias.date_start, filter_criterias.date_end, filter_criterias.order_by, filter_criterias.printer_name)
        stats.value = statistics
        console.log(stats)
    }
)

const show_some_filter = (ele) => {
    ele.value = !ele.value
}

const launchrequest = async () => {
    const statistics = await getStats(filter_criterias.date_start, filter_criterias.date_end, filter_criterias.order_by, filter_criterias.printer_name)
    stats.value = statistics
    console.log(stats)
}

</script>