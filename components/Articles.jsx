import React, { useEffect } from "react"
import axios from "axios"
import ArticleList from "./ArticleList"



export default function Articles (){
    return (
        <div>
            <ArticleCardExpanded />
            <Comments />
        </div>
    )
}