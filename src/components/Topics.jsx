import React from "react"
import TopicList from "./TopicList"
import { useEffect, useState } from "react";
import api from "./Api";


export default function Topics () {
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      api.get("/topics")
        .then((response) => {
          setTopics(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching topics:", error);
          setLoading(false);
        });
    }, []);
  
    
    if (loading) {
      return <p>Loading...</p>;
    }

    return (
        <div>
            <TopicList  topics={topics}/>
        </div>
    )
}