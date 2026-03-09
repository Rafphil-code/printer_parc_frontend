import api from './index.js'

export const getConsumables = async (printer_id) => {
    const response = await api.get(`/consumables/${printer_id}`)
    return response.data
}

export const pollPrinter = async (printer_id) => {
    const response = await api.get(`/consumables/polling/printers/${printer_id}`)
    return response.data
}