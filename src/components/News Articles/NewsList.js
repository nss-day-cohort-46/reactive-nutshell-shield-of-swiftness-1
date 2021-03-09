import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { ArticleContext } from "./NewsProvider"
import { ArticleCard } from "./News"

export const ArticleList = () => {
    
    const { article, getArticle } = useContext(ArticleContext)

    const history = useHistory()

    useEffect(() => {
        getArticle()
    
      }, [])


    return (
        <>
            <h2>Upcoming News</h2>
            <div className="article__page">
                <div>
                    {
                        article.map(articleObj => {
                            return <ArticleCard key={articleObj.id} article={articleObj} />
                        })
                    }

                </div>
            </div>
        </>
    )
}