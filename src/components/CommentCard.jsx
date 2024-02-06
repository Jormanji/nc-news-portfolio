import "../App.css"

export default function CommentCard ({comment}) {
    return(
        <div className="commentCard">
                <p>Author: {comment.author}</p>
                <p>Date Posted: {comment.created_at}</p>
                <p>{comment.body}</p>
                <p>Votes: {comment.votes}</p>
            </div>
        )    
}
