import React from "react"

function Card({ headline, articleID }) {
    return (
        <div className='card' onClick={() => window.open(`/article/${articleID}`, "_blank").focus()}>
            <div className='card-thumbnail'>
                <p className='thumbnail-text'>thumbnail</p>
            </div>
            <p className='headline'>{headline}</p>
        </div>
    )
}

export default Card