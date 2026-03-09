import api from './index.js'

export const getStats = async () => {
    const result = await api.get("/stats")
    return result.data
}