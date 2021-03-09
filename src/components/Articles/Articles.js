import React from "react"
import { Link } from "react-router-dom"

export const ArticleCard = ({ articles }) => (
<section className="articles">
    {console.log(articles)}
    <h3 className="articles__title">
      {/* <Link to={`/animals/detail/${animalProps.id}`}>
        {animalProps.name}
      </Link> */}
      {articles.title}
    </h3>
    <div className="article__url">url: {articles.url}</div>
    <div className="article__synopsis">Synopsis: {articles.synopis}</div>
  </section>
)