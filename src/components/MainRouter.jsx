import React from "react"
import IndividualArticles from "./IndividualArticles"
import Homepage from "./Homepage"
import Topics from "./Topics"
import {Routes, Route} from "react-router-dom";
import ArticleList from "./ArticleList";


export default function MainRouter () {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/articles" element={<ArticleList />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/articles/:article_id" element={<IndividualArticles />} />
        </Routes>
    )
}
