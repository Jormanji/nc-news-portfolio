import React from "react";
import ArticleList from "./ArticleList";
import Navbar from "./Navbar"
import {useState, useEffect} from "react"
import axios from "axios";

export default function Homepage () {
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
            <Navbar />
            <ArticleList articles={articlesList}/>
        </div>
    )
}