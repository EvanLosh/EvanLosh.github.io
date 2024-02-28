import React from "react"
import { useParams } from 'react-router-dom'
import './Article.css'
import CommEdArticle from "./articles/CommEdArticle"
import MyPortfolioArticle from "./articles/MyPortfolioArticle"
import MeetMeArticle from "./articles/MeetMeArticle"
import DictionaryArticle from "./articles/DictionaryArticle"




function Article() {

    const { articleID } = useParams()
    let selectedArticle = null
    switch (articleID) {
        case 'CommEd':
            selectedArticle = <CommEdArticle />; break;
        case 'DictionaryApp':
            selectedArticle = <DictionaryArticle />; break;
        case 'MeetMe':
            selectedArticle = <MeetMeArticle />; break;
        case 'MyPortfolio':
            selectedArticle = <MyPortfolioArticle />; break;
        default:
            selectedArticle = <div id="invalid-article-id">
                <h1>Invalid article ID: {articleID}</h1>
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