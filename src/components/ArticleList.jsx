import ArticleCard from "./ArticleCard"
import React from "react"
import {useEffect, useState} from "react"
import api from "./Api"
import { useNavigate, useParams } from "react-router-dom"

export default function ArticleList () {
  const { topic } = useParams()
  const [articlesList, setArticlesList] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()


  useEffect(() => {
    const fetchArticles = () => {
      api.get("/articles")
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
          })
      }
      
      fetchArticles()
    }, [topic])


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
      <button onClick={() => navigate("/topics")}>View Topics</button>
          {articlesList.map((article) => {
              return(
              <ArticleCard key={article.article_id} article={article} />
              )
          })}
      </div>
  )
}