import api from './index.js'

export const getmodels = async () => {
    const response = await api.get('/printers/models')
    return response.data
}