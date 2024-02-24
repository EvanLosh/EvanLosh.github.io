import React from "react"
import { useParams } from 'react-router-dom'
import CommEdArticle from "./articles/CommEdArticle"
import MyPortfolioArticle from "./articles/MyPortfolioArticle"
import './Article.css'




function Article() {

    const { articleID } = useParams()
    let selectedArticle = null
    switch (articleID) {
        case 'CommEd':
            selectedArticle = <CommEdArticle />; break;
        case 'MyPortfolio':
            selectedArticle = <MyPortfolioArticle />; break;
        default:
            selectedArticle = <div id="invalid-article-id">
                <h1>Invalid article ID</h1>
                <p><a href='/'>Return home</a></p>
            </div>; break;
    }

    return (
        <div id="article">
            {selectedArticle}
        </div>
    )
}

export default Article