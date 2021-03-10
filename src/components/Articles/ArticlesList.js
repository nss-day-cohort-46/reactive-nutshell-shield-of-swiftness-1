import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { ArticleContext } from "./ArticlesProvider"
import { ArticleCard } from "./Articles"

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
        </>
    )
}