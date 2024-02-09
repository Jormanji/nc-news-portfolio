import React from "react";
import CommentCard from "./CommentCard"
import AddComment from "./AddComment"


export default function Comments({ comments, onDeleteComment }) {

  return (
    <div>
      {comments.map((comment, index) => (
        <CommentCard key={index} comment={comment} onDelete={onDeleteComment}/>
      ))}
    </div>
  );
}
