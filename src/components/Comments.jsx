import React from "react";
import CommentCard from "./CommentCard"
import AddComment from "./AddComment"


export default function Comments ({comments}) {
    return (
        <div>
            {comments.map(comment => (
                <CommentCard key={comment.comment_id} comment={comment} />
            ))}
        </div>
    );
}
