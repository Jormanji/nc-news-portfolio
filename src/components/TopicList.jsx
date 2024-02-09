import React from "react";
import TopicCard from "./TopicCard"
import { Link } from "react-router-dom";

export default function TopicList ({ topics, handleTopicClick }) {
    return (
        <div>
          <h1>Select a Topic</h1>
          <ul>
            {topics.topics.map((topic) => (
              <li key={topic.slug}>
                <Link to={`/topics/${topic.slug}`} key={topic.slug}>
                    <TopicCard topic={topic} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
    }
