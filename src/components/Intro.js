import React from "react"
import './Intro.css'

function Intro({ showIntro, onIntroContinue }) {

    // console.log(showIntro)

    function openNewTab(url) {
        window.open(url, '_blank').focus()
    }

    console.log('Session storage is ' + showIntro)

    return (
        <div id='intro' className={showIntro ? 'show' : 'hide'}>
            <div id='intro-content'>
                <img src='images/PXL_20240215_173649101.PORTRAIT~2-downscaled.jpg' alt='profile picture' id='pfp'></img>

                <h1 >Evan Losh</h1>
                <p>Full-stack software engineer</p>
                {/* <ul id='intro-links'>
                    <li><div onClick={() => openNewTab('https://github.com/EvanLosh')}><p>[Github]</p></div></li>
                    <li><div onClick={() => openNewTab('https://www.linkedin.com/in/evan-losh/')}><p>[LinkedIn]</p></div></li>
                    <li><div onClick={() => openNewTab('https://medium.com/@evand.losh')}><p>[Medium]</p></div></li>
                </ul> */}
            </div>
            <div>

                <button onClick={onIntroContinue}>View portfolio</button>
            </div>
        </div>
    )
}

export default Intro