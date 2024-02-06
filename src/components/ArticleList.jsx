import ArticleCard from "./ArticleCard"
import axios from "axios"
import React from "react"
import {useEffect, useState} from "react"

export default function ArticleList () {
    const [articlesList, setArticlesList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios
        .get("https://nc-news-portfolio-site.onrender.com/api/articles")
        .then((response) => {
            setArticlesList(response.data.articles)
            setLoading(false)
        })
        .catch((err) => {
            console.log(err)
            setLoading(false)
        })
    }, [])


    return (
        <div>
            {loading ? (<p>Loading...</p>) :
        <div>
            {articlesList.map((article) => {
                return(
                <ArticleCard key={article.article_id} article={article} />
                )
            })}
        </div>
        }
        </div>
    )

}