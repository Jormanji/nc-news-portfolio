import React from "react";
import CommentCard from "./CommentCard"
import AddComment from "./AddComment"


export default function Comments({ comments }) {
  return (
    <div>
      {comments.map((comment, index) => (
        <CommentCard key={index} comment={comment} />
      ))}
    </div>
  );
}
