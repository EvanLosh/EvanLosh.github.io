import React from "react"
import './Card.css'

function Card({ cardData }) {
    return (
        <div className='card' onClick={() => window.open(`/article/${cardData.articleID}`, "_blank").focus()}>
            <div className='card-thumbnail'>
                <img alt={cardData.headline + 'thumbnail'} src={cardData.thumbnail}></img>
                {/* <p className='thumbnail-text'>thumbnail</p> */}
            </div>
            <p className='headline'>{cardData.headline}</p>
        </div>
    )
}

export default Card