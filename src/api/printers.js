import api from './index.js'

export const getprinters = async () => {
    const response = await api.get('/printers')
    return response.data
}

export const getParticularPrinter = async (printer_id) => {
    const response = await api.get(`/printers/${printer_id}`)
    return response
}

export const updatePrinter = async (printer_id,printer_update) => {
    const response = await api.put(`/printers/${printer_id}`, printer_update)
    return response
}

