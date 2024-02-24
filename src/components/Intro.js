import React, { useState } from "react"
import './Intro.css'

function Intro() {

    const [hideIntro, setHideIntro] = useState(false)
    function onIntroContinue() {
        setHideIntro(true)
        sessionStorage.setItem('hideIntro', true)
    }

    return (
        <div id='intro' className={hideIntro ? 'hide' : 'show'}>
            <div id='intro-content'>
                <img src='images/portrait-large.jpg' alt='portrait' id='pfp' className='portrait'></img>

                <h1 >Evan Losh</h1>
                <p>Full-stack software engineer</p>
            </div>
            <div>

                <button className='clickable' onClick={onIntroContinue}>View portfolio</button>
            </div>
        </div>
    )
}

export default Intro