import api from "./index";

export const generalinfo = async () => {
    const result = await api.get("/general")
    return result.data
}