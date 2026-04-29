import api from './index.js'

export const replacecons = async (replacement_dict) => {
    const result = await api.post(`/stock/output`, replacement_dict)
    return result.data
}

export const getmovements = async () => {
    const result = await api.get(`/stock/mouvements`)
    return result.data
}

export const getstock = async () => {
    const result = await api.get(`/stock`)
    return result.data
}

export const updatestock = async (id,item_dict) => {
    const url = `/stock/update/${id}`
    const result = api.put(url, item_dict)
    return result.data
}

export const inputstock = async (input_dict) => {
    const result = api.post(`/stock/input`, input_dict)
    return result.data
}