import "../App.css"
import React from "react"
import api from "./Api"
import { UserContext } from "./Users"
import { useContext, useState } from "react"

export default function CommentCard ({comment}) {
    const { user } = useContext(UserContext)
    const [deleteMessage, setDeleteMessage] = useState("");


    const handleDelete = () => {
        api.delete(`/comments/${comment.comment_id}`)
        .then((response) =>{
            setDeleteMessage("Comment successfully deleted")
        })
        .catch((err) => {
            console.log(err)
            setDeleteMessage("Failed to delete comment. Please try again later.")
        })
    }


    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false, 
        };
        return date.toLocaleDateString("en-GB", options); 
      };
    

    return(
        <div className="commentCard">
                <p>Author: {comment.author || comment.username}</p>
                <p>Date Posted: {formatDate(comment.comment_created_at)}</p>
                <p>{comment.body}</p>
                <p>Votes: {comment.votes}</p>
                {user.username === comment.author ? (
                    <button onClick={handleDelete}>Delete comment</button>
                ): null}
                 {deleteMessage && <p>{deleteMessage}</p>}
            </div>
        )    
}
