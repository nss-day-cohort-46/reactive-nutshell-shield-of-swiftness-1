import React, { useContext, useState, useEffect } from "react"
import { useHistory, } from 'react-router-dom'
import { ArticleContext } from "./ArticlesProvider"

export const ArticleForm = () => {

    const { addArticle, getArticles } = useContext(ArticleContext)

    const [article, setArticles] = useState({
        title: "",
        synopsis: "",
        url: "",
    });

    // const { articlesId } = useParams();
    const history = useHistory();


    
    // input fields in new event form to change

    const handleControlledInputChange = (e) => {
        const newArticle = { ...article }

        let inputValue = e.target.value

        if (e.target.id.includes("Id")) {
            inputValue = parseInt(inputValue)
        }

        newArticle[e.target.id] = inputValue

        setArticles(newArticle)
    }

    // save function to save event

    const handleSaveArticle = (e) => {
        e.preventDefault()

        if (article.title === "" || article.synopsis === "" || article.url === "") {
            window.alert("Please complete the field")
        } else {
            addArticle(article)
            .then(() => history.push("/articles"))
        }
    }

    useEffect(() => {
        getArticles()
    }, [])

    return (
        <form className="articleForm">
            <h2 className="ariticleForm__title">Add a New Article</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Article Title:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Article title"
                    
                    value={article.title}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="synopsis">Article synopsis:</label>
                    <input type="synopsis" id="synopsis" required className="form-control" 
                    onChange={handleControlledInputChange}
                    value={article.synopsis}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="url">url:</label>
                    <input type="text" id="location" required className="form-control" placeholder="Article url"
                    onChange={handleControlledInputChange}
                    value={article.url}/>
                </div>
            </fieldset>

            <button className="btn btn-primary"
                onClick={handleSaveArticle}>
                Save New Article
            </button>
        </form>
    )
}