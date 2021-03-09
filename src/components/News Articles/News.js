import React from "react"
import { Link } from "react-router-dom"

export const NewsCard = ({ article }) => (
<section className="article">
    {console.log(article)}
    <h3 className="article__title">
      {/* <Link to={`/animals/detail/${animalProps.id}`}>
        {animalProps.name}
      </Link> */}
      {article.name}
    </h3>
    <div className="article__url">url: {article.url}</div>
    <div className="article__synopsis">Synopsis: {article.synopis}</div>
  </section>
)