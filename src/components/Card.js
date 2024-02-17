import React from "react"

function Card({ headline }) {
    return (
        <div class='card'>
            <div class='card-thumbnail'>
                <p class='thumbnail-text'>thumbnail</p>
            </div>
            <p class='headline'>{headline}</p>
        </div>
    )
}

export default Card