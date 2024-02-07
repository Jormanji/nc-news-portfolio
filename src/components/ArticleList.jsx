import ArticleCard from "./ArticleCard"
import axios from "axios"
import React from "react"
import {useEffect, useState} from "react"
import api from "./Api"

export default function ArticleList () {
    const [articlesList, setArticlesList] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        api.get("/articles")
          .then((response) => {
            setArticlesList(response.data.articles);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      }, []);

    if (loading){
        return <p>Loading...</p>
    }

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