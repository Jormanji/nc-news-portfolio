import axios from "axios"
import React from "react";
import { useState } from "react"
import api from "./Api";

export default function ArticleCardExpanded ({article}) {
    const [localVotes, setLocalVotes] = useState(article.votes);
    const [error, setError] = useState(null)

    const handleVote = (voteType) => {
        const newVotes = voteType === 'upvote' ? localVotes + 1 : localVotes - 1;
        setLocalVotes(newVotes);
        setError(null)

        api.patch(`/articles/${article.article_id}`, { inc_votes: voteType === 'upvote' ? 1 : -1 })
            .then(() => {
            })
            .catch((err) => {
                setLocalVotes(article.votes);
                setError("Vote attempt failed")
                console.log(err);
            });
    };


    return (
        <div className="articleCardExpanded">
            <h2>{article.title}</h2>
            <p>Author: {article.author}</p>
            <p>Date Posted: {article.created_at}</p>
            <p>{article.body}</p>
            <p>Votes: {localVotes}</p>
            <button onClick={() => handleVote("upvote")}>Upvote</button>
            <button onClick={() => handleVote("downvote")}>Downvote</button>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
}
