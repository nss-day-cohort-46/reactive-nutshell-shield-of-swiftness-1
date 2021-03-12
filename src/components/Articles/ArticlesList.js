import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { ArticleContext } from "./ArticlesProvider"
import { ArticleCard } from "./Articles"
import { Link } from "react-router-dom"

export const ArticlesList = () => {
    
    const { articles, getArticles } = useContext(ArticleContext)

    const history = useHistory()

    useEffect(() => {
        getArticles()
    
      }, [])


    return (
        <>
            <h2>Upcoming News</h2>
            <div className="articles__page">
                <div>
                    {
                        articles.map(articleObj => {
                            return <ArticleCard key={articleObj.id} article={articleObj} />
                        })
                    }
                </div>
            </div>
            <Link to="articles/create">
                <button className="articles_addBtn">Add An Article</button>
            </Link>
        </>
    )
}