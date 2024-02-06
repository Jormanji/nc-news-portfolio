import ArticleCard from "./ArticleCard";

export default function ArticleList ({articles}) {
    return (
        <div>
            {articles.map((article) => {
                return(
                <ArticleCard key={article.article_id} article={article} />
                )
            })}
        </div>
    )

}