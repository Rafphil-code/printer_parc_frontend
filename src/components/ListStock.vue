<template>
    <div class="justify-center p-2">
        <div class="flex p-2">
            <table class="table-auto w-full border-collapse">
                <thead>
                    <th class="border border-gray-300 p-2 bg-indigo-100">Cartouche</th>
                    <th class="border border-gray-300 p-2 bg-indigo-100">Quantité</th>
                    <th class="border border-gray-300 p-2 bg-indigo-100">METTRE À JOUR</th>
                </thead>
                <tbody>
                    <tr class="odd:bg-white even:bg-indigo-50" v-for="st in stock">
                        <td class="border border-gray-300 p-2  font-semibold" :class="{'text-blue-500': st.name.includes('Cyan'), 'text-yellow-500': st.name.includes('Yellow'), 'text-black-500': st.name.includes('Black'), 'text-red-700': st.name.includes('Magenta')}"> 
                            {{ st.name }} 
                        </td>
                        <td class="border border-gray-300 p-2  font-semibold"> 
                            {{ st.quantity }} 
                        </td>

                        <td class="flex gap-2 justify-center border border-gray-300 p-2  font-semibold">
                            <button @click="show_updating(st)" class="cursor-pointer text-white p-2 bg-indigo-600 rounded-md hover:bg-indigo-800">Modifier</button>
                            <button @click="show_input(st)" class="cursor-pointer text-white p-2 bg-indigo-600 rounded-md hover:bg-indigo-800">une pierre 2 coups</button>
                            
                        </td>
                        
                    </tr>
                </tbody>
            </table>
            
        </div>
    </div>
    <StockUpdating @submit="update_stock" @close="close_updating" :show="showupdating" :item="sttoupdate"/>
    <stock-input @submit="input_stock" @close="close_input" :show="showinput" :item="sttoinput"/>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getstock, updatestock, inputstock } from '../api/stock_and_mouvements';
import StockUpdating from './StockUpdating.vue';
import StockInput from './StockInput.vue';

const stock = ref()
const showupdating = ref()
const showinput = ref()
const sttoupdate = ref()
const sttoinput = ref()

onMounted(
    async () => {
        const result = await getstock()
        stock.value = result
    }
)

const show_updating = (st) => {
    showupdating.value = true
    sttoupdate.value = st
    
}

const show_input = (st) => {
    showinput.value = true
    sttoinput.value = st
}

const close_updating = () => {
    showupdating.value = false
    
}

const close_input = () => {
    showinput.value = false
    
}

const update_stock = async (item) => {
    showupdating.value = false
    const up_dict = {
        consumable_id : item.consumable_id,
        quantity : item.quantity
    }
    const result = await updatestock(item.id, up_dict)
    async () => {
        const result = await getstock()
        stock.value = result
    }
    
}

const input_stock = async (item) => {
    const result = await inputstock(item)
    console.log(result)
}

</script>