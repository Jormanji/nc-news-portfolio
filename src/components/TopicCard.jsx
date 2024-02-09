export default function TopicCard ({ topic }) {
    return (
        <div className="topicCard">
          <h2>{topic.slug}</h2>
          <p>{topic.description}</p>
        </div>
    );
}
