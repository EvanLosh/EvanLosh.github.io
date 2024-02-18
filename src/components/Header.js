import React from "react"
import MainMenu from "./MainMenu"
import NavBar from "./NavBar"

function Header() {
    return (
        <div id="header" >
            <div id='header-portrait-container'>
                <div onClick={() => window.location.href = '/'} className='image-wrapper'><img src='images/PXL_20240215_173649101.PORTRAIT~2-downscaled.jpg' alt='portrait' className='portrait'></img>
                </div>
                <h1 onClick={() => window.location.href = '/'} >Evan Losh</h1>
            </div>
            <NavBar />
        </div>
    )
}

export default Header