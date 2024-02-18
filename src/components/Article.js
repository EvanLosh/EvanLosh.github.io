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
            break;
    }

    return (
        <div id="article">
            <h1 >Article</h1>
            {selectedArticle}
        </div>
    )
}

export default Article