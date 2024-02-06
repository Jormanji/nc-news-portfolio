import React from "react"
import "../App.css"
import { Link } from "react-router-dom"

export default function ArticleCard ({article}) {
    const {title, author, created_at, votes, comment_count, article_id} = article
    return (
        <div className="articleCard">
            <h2>{title}</h2>
            <p>Author: {author}</p>
            <p>Date Posted: {created_at}</p>
            <p>Comment count: {comment_count}</p>
            <p>Votes: {votes}</p>
            <button>Upvote</button>
            <Link to={`/articles/${article_id}`}>View article and comments</Link>
        </div>
    )
}
