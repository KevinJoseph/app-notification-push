import axios from "axios"

const api = "https://api-chincha-notifi.onrender.com/articles"

export const axiosGetArticle = async () => {
    try {
        const res = await axios.get(api)
        return res.data
    } catch (error) {
        throw Error("Error en axios articles")
    }
}