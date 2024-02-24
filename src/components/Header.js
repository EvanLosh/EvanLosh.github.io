import React from "react"
import NavBar from "./NavBar"
import './Header.css'

function Header() {
    return (
        <div id="header" >
            <div id='header-portrait-container'>
                <div onClick={() => window.location.href = '/'} className='image-wrapper clickable'>
                    <img src='/images/portrait-large.jpg' alt='portrait' className='portrait'></img>
                </div>
                <div className='my-name-logo'>
                    <h1 className='clickable' onClick={() => window.location.href = '/'} >Evan Losh</h1>
                    <div id='header-open-to-work' className='open-to-work'>
                        <div className='open-to-work-left'></div>
                        <p className='open-to-work-middle'>Open to work</p>
                        <div className='open-to-work-right'></div>
                    </div>
                </div>
            </div>
            <NavBar />
        </div>
    )
}

export default Header