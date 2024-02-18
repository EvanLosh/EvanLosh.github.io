import React from "react"
import Card from './Card'

function Home() {
    return (
        <div id='home'>
            <div id='card-filter'>
                <p>filter cards for a string</p>
                <p>filter cards by category</p>
            </div>
            <div className='card-container'>
                <Card headline={'Dictionary App'} />
                <Card headline={'Santa Chronicles'} />
                <Card headline={'MeetMe: easily schedule meetings'} />
                <Card headline={'Assignment sheet generator'} />
                <Card headline={'blog post 1'} />
                <Card headline={'blog post 2'} />
                <Card headline={'blog post 3'} />
                <Card headline={'My personal website'} />
                <Card headline={'Minigame Collection'} />
                <Card headline={'LeetCode Solutions'} />
                <Card headline={'2D physics simulator'} />
                <Card headline={'The Autosaurus'} />
                <Card headline={'LeetCode Solutions'} />
            </div>
        </div>
    )
}

export default Home