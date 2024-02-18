import React from "react"

function Card({ headline }) {
    return (
        <div className='card'>
            <div className='card-thumbnail'>
                <p className='thumbnail-text'>thumbnail</p>
            </div>
            <p className='headline'>{headline}</p>
        </div>
    )
}

export default Card