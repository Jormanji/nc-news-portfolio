import React from "react";
import ArticleList from "./ArticleList";
import Navbar from "./Navbar"

export default function Homepage () {
    return (
        <div>
            <Navbar />
            <ArticleList />
        </div>
    )
}