import React, { useEffect, useState } from "react"
import { useMatch } from "react-router-dom"
import axios from "axios"
import { useParams } from "react-router-dom"
import ArticleCardExpanded from "./ArticleCardExpanded"
import Comments from "./Comments"


export default function IndividualArticles (){
    const match = useMatch("/articles/:articleId")
    const articleId = match.params.articleId
    const [article, setArticle] = useState(null)

    useEffect(() => {
        axios.get(`https://nc-news-portfolio-site.onrender.com/api/articles/${articleId}`)
        .then((response) => {
            setArticle(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [articleId])

    if (!article) {
        return <div>Searching for the lost Arkticle</div>;
    }

    return (
        <div>
            <ArticleCardExpanded article={article}/>
        </div>
    )
}
