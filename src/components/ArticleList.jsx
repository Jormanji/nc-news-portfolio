import ArticleCard from "./ArticleCard"
import axios from "axios"
import React from "react"
import {useEffect, useState} from "react"

export default function ArticleList () {
    const [articlesList, setArticlesList] = useState([])

    useEffect(() => {
        axios
        .get("https://nc-news-portfolio-site.onrender.com/api/articles")
        .then((response) => {
            setArticlesList(response.data.articles)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])


    return (
        <div>
            {articlesList.map((article) => {
                return(
                <ArticleCard key={article.article_id} article={article} />
                )
            })}
        </div>
    )

}