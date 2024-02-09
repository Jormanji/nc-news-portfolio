import ArticleCard from "./ArticleCard"
import React from "react"
import {useEffect, useState} from "react"
import api from "./Api"
import { useNavigate, useParams } from "react-router-dom"
import { useSearchParams } from "react-router-dom"

export default function ArticleList () {
  const { topic } = useParams()
  const [articlesList, setArticlesList] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const [sortBy, setSortBy] = useState("date");
  const [order, setOrder] = useState("desc");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
      setLoading(true);
      api.get(`/articles`)
        .then(response => {
          let fetchedArticles = response.data.articles;
          if (topic) {
            fetchedArticles = fetchedArticles.filter(article => article.topic === topic);
          }
          return fetchedArticles;
        })
        .then(articles => sortArticles(articles, sortBy, order))
        .then(sortedArticles => {
          setArticlesList(sortedArticles);
          setLoading(false);
        })
        .catch(error => {
          console.log("Error fetching articles:", error);
          setLoading(false);
        });
  }, [topic, sortBy, order])

  const sortArticles = (articles, sortBy, order) => {
    const sortedArticles = articles.sort((a, b) => {
      if (sortBy === "date") {
        return order === "asc" ? new Date(a.created_at) - new Date(b.created_at) : new Date(b.created_at) - new Date(a.created_at);
      } else if (sortBy === "comment_count") {
        return order === "asc" ? a.comment_count - b.comment_count : b.comment_count - a.comment_count;
      } else if (sortBy === "votes") {
        return order === "asc" ? a.votes - b.votes : b.votes - a.votes;
      }
      return 0;
    });
    return sortedArticles;
  };

  const handleSortByChange = (event) => {
      setSortBy(event.target.value);
    };
  
  const handleOrderChange = (event) => {
      setOrder(event.target.value);
    };

  const handleTopicClick = (selectedTopic) => {
    if(selectedTopic === null){
      navigate("/articles")
    } else {
    navigate(`/topics/${selectedTopic}`);}
  }

  if (loading){
      return <p>Loading...</p>
  }
  
  return (
      <div>
        <h1>{topic ? `Articles for ${topic}` : "All Articles"}</h1>
      {topic && (<button onClick={() => handleTopicClick(null)}>View All Articles</button>
      )}
      <div>
        Sort by:
        <select value={sortBy} onChange={handleSortByChange}>
          <option value="date">Date</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>
        <select value={order} onChange={handleOrderChange}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>
      <button onClick={() => navigate("/topics")}>View Topics</button>
          {articlesList.map((article) => {
              return(
              <ArticleCard key={article.article_id} article={article} />
              )
          })}
      </div>
  )
}