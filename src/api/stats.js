import api from './index.js'

export const getStats = async (date_start, date_end, order_by, printer_name) => {
    var url = `/stats?date_start=${date_start}&date_end=${date_end}&order_by=${order_by}`
    if (printer_name != "") {
        url += `&printer_name=${printer_name}`
    }
    const result = await api.get(url)
    console.log(result.data)
    return result.data
}