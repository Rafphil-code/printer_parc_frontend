import api from './index.js'

export const replacecons = async (replacement_dict) => {
    const result = await api.post(`/stock/output`, replacement_dict)
    return result.data
}

export const getmovements = async () => {
    const result = await api.get(`/stock/mouvements`)
    return result.data
}