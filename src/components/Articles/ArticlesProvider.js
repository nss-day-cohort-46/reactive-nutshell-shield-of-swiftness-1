import React, { useState, createContext } from "react"

export const ArticleContext = createContext()

export const ArticlesProvider = (props) => {
    const [articles, setArticles] = useState([])

    const getArticles = () => {
        return fetch("http://localhost:8088/article")
        .then(response => response.json())
        .then(setArticles)
    }

    const addArticle = articleObj => {
        return fetch("http://localhost:8088/Article", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(articleObj)
        })
        .then(response => response.json())
    }

    return (
        <ArticleContext.Provider value ={{
            articles, getArticles, addArticle
        }}>
            {props.children}
        </ArticleContext.Provider>
    )
}