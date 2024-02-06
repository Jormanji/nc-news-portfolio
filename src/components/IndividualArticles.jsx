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
    const [comments, setComments] = useState([])

    useEffect(() => {
        axios.get(`https://nc-news-portfolio-site.onrender.com/api/articles/${articleId}`)
        .then((response) => {
            setArticle(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
        axios.get(`https://nc-news-portfolio-site.onrender.com/api/articles/${articleId}/comments`)
        .then((response) => {
            setComments(response.data.comments)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [articleId])

    if (!article) {
        return <div>Retrieving the article</div>;
    }

    return (
        <div>
            <ArticleCardExpanded article={article}/>
            <Comments comments={comments}/>
        </div>
    )
}
