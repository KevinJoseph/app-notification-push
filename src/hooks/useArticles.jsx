import { axiosGetArticle } from "../services/getArticles"
import { useEffect, useState } from "react"

export const useArticles = () => {
    
    const [articles,setArticles] = useState([])
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        const articles = async () => {
            try {
                const data = await axiosGetArticle()
                setArticles(data)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        articles()
    }, [])

    return { articles, error, loading }
}