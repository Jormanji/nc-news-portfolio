import React from "react"
import "../src/App.css"

export default function ArticleCard ({article}) {
    const {title, author, datePosted, votes, comment_count} = article
    return (
        <div className="articleCard">
            <h2>{title}</h2>
            <p>Author: {author}</p>
            <p>Date Posted: {datePosted}</p>
            <p>Comment count: {comment_count}</p>
            <p>Votes: {votes}</p>
            <button>Upvote</button>
            <button>See comments</button>
        </div>
    )
}