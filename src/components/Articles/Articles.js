import React from "react"
// import { Link } from "react-router-dom"

export const ArticleCard = ({ article }) => {
return (
  <section className="articles">
    <h3 className="articles__title">
      {article.title}
    </h3>
    <div className="article__url">url: {article.url}</div>
    <div className="article__synopsis">Synopsis: {article.synopsis}</div>
  </section>
)
    }