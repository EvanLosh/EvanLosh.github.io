import React from "react"
import Card from './Card'
import './Home.css'

function Home() {

    const cardData = [
        {
            headline: 'CommEd: easily type up and share solutions to math problems',
            articleID: 'CommEd',
            category: 'Project Web Software Front-end Back-end',
            thumbnail: '/images/math01-unsplash-downscaled.jpg',
        },
        {
            headline: 'MeetMe: invite users through a dynamic and interactive calendar',
            articleID: 'MeetMe',
            category: 'Project Web Software Front-end Back-end',
            thumbnail: '/images/debby-hudson-L29ymwjVvE4-unsplash-cropped-downsized.jpg',
        },
        {
            headline: "Dictionary App: Look up words in Merriam-Webster's API",
            articleID: 'DictionaryApp',
            category: 'Project Web Software Front-end',
            thumbnail: '/images/mick-haupt-BqQd3QFTXXM-unsplash-downsized.jpg',
        },
        {
            headline: 'My portfolio website',
            articleID: 'MyPortfolio',
            category: 'Project Web Software Front-end',
            thumbnail: 'images/my-portfolio-tilted-cropped-adjusted.png',
        }
    ]

    const cardElements = cardData.map(c => <Card cardData={c} key={c.articleID} />)

    return (
        <div id='home'>
            {/* <div id='card-filter'>
                <p>TODO: search for cards with a string</p>
                <p>TODO: filter cards by category</p>
                <p>TODO: Sort cards</p>
            </div> */}
            <h1>My projects</h1>
            <div className='card-container-outer'>
                <div className='card-container-inner'>
                    {cardElements}

                </div>
            </div>
            <h1>More entries coming soon!</h1>
        </div>
    )
}

export default Home