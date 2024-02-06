export default function ArticleCardExpanded ({article}) {
    return (
        <div className="articleCardExpanded">
            <h2>{article.title}</h2>
            <p>Author: {article.author}</p>
            <p>Date Posted: {article.created_at}</p>
            <p>{article.excerpt}</p>
            <p>Comments: {article.comment_count}</p>
            <p>Votes: {article.votes}</p>
        </div>
    );
}
