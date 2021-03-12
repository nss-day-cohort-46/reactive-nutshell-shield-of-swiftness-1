import React, { useContext } from "react"
import { ArticleContext } from "./ArticlesProvider"
// import { Link } from "react-router-dom"

export const ArticleCard = ({ article }) => {

  const { deleteArticle } = useContext(ArticleContext)

  const handleDelete = () => {
    deleteArticle(article.id)
  }

return (
  <section className="articles">
    <h3 className="articles__title">
      {article.title}
    </h3>
    <div className="article__url">url: {article.url}</div>
    <div className="article__synopsis">Synopsis: {article.synopsis}</div>
    <button className="event__delete"
    onClick={handleDelete}>Delete Article</button>
  </section>
)
    }