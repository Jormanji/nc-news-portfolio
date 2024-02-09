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
    setSearchParams({ sort_by: sortBy, order: order })
    
      api.get(`/articles`)
        .then((response) => {
          let filteredArticles = response.data.articles
          if (topic) {
            filteredArticles = filteredArticles.filter(article => article.topic === topic)
          }
            setArticlesList(filteredArticles)
            setLoading(false)
          })
          .catch((error) => {
            console.log("Error fetching articles:", error)
            setLoading(false)
          })
      
    }, [topic, sortBy, order, setSearchParams])

  const handleSortByChange = (event) => {
      setSortBy(event.target.value);
    };
  
  const handleOrderChange = (event) => {
      setOrder(event.target.value);
    };

  const handleApplySort = () => {
      setSearchParams({ sort_by: sortBy, order: order })
      console.log(searchParams.toString());
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