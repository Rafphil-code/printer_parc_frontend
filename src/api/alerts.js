import api from './index.js'

export const getalerts = async () => {
    const alerts = await api.get("/alerts")
    return alerts.data
}