import React, { useState, createContext } from "react"

export const ArticleContext = createContext()

export const ArticleProvider = (props) => {
    const [article, setArticle] = useState([])

    const getArticle = () => {
        return fetch("http://localhost:8088/article")
        .then(response => response.json())
        .then(setArticle)
    }

    const addArticle = ArticleObj => {
        return fetch("http://localhost:8088/Article", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ArticleObj)
        })
        .then(response => response.json())
    }

    return (
        <ArticleContext.Provider value ={{
            article, getArticle, addArticle
        }}>
            {props.children}
        </ArticleContext.Provider>
    )
}