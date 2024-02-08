import React, { useState, useContext } from "react";
import axios from "axios";
import api from "./Api";
import { UserContext } from "./Users";

const AddComment = ({ articleId, onAddComment }) => {
  const { user } = useContext(UserContext);
  const [commentText, setCommentText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (!commentText) {
      setError("Please enter a comment");
      return;
    }

    setLoading(true);
    

    const optimisticRender = {
      username: user.username,
      body: commentText,
      comment_created_at: new Date().toISOString(),
      votes: 0
    };
    onAddComment(optimisticRender);

    api.post(`/articles/${articleId}/comments`, {
        username: user.username,
        body: commentText,
      })
      .then((response) => {
        setSuccess(true);
        setCommentText("");
        setLoading(false);
      })
      .catch((error) => {
        console.log(error)
        setError("Failed to post comment. Please try again later.");
        setLoading(false);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={commentText}
          onChange={(event) => setCommentText(event.target.value)}
          placeholder="Enter your comment..."
          required
        ></textarea>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">Comment posted successfully!</p>}
        <button type="submit" disabled={loading}>
          {loading ? "Posting..." : "Submit Comment"}
        </button>
      </form>
    </div>
  );
};

export default AddComment;