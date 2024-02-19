import React from "react"
import NavBar from "./NavBar"
import './Header.css'

function Header() {
    return (
        <div id="header" >
            <div id='header-portrait-container'>
                <div onClick={() => window.location.href = '/'} className='image-wrapper link'>
                    <img src='images/portrait-large.jpg' alt='portrait' className='portrait'></img>
                </div>
                <h1 className='link' onClick={() => window.location.href = '/'} >Evan Losh</h1>
            </div>
            <NavBar />
        </div>
    )
}

export default Header