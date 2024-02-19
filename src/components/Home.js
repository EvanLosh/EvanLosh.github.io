import React from "react"
import Card from './Card'
import './Home.css'

function Home() {

    const cardData = [
        {
            headline: 'CommEd: easily type up and share your math homework!',
            articleID: 'CommEd',
            category: 'Project Web Software Front-end Back-end',
            thumbnail: 'images/comm-ed-thumbnail.png',
        },
        {
            headline: 'My portfolio website',
            articleID: 'MyPortfolio',
            category: 'Project Web Software Front-end',
            thumbnail: 'images/my-portfolio-thumbnail.png',
        }
    ]

    const cardElements = cardData.map(c => <Card cardData={c} key={c.articleID} />)

    return (
        <div id='home'>
            <div id='card-filter'>
                <p>TODO: search for cards with a string</p>
                <p>TODO: filter cards by category</p>
                <p>TODO: Sort cards</p>
            </div>
            <div className='card-container'>
                {cardElements}
            </div>
            <h1>More entries coming soon!</h1>
        </div>
    )
}

export default Home