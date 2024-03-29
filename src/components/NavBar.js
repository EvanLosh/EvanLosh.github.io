import React from "react"
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'

function NavBar() {


    function openNewTab(url) {
        window.open(url, '_blank').focus()
    }

    return (
        <div id='navbar'>




            <div id='navlist'>
                <div className="navlink clickable"><a href="/about">About Me</a></div>

                <div className='icon clickable github' onClick={() => openNewTab('https://github.com/EvanLosh')}>
                    <FontAwesomeIcon icon={faGithub} />
                </div>
                <div className='icon clickable linkedin' onClick={() => openNewTab('https://www.linkedin.com/in/evan-losh/')}>
                    <FontAwesomeIcon icon={faLinkedin} />
                </div>
                <div className='icon clickable medium' onClick={() => openNewTab('https://medium.com/@evand.losh')}>
                    <FontAwesomeIcon icon={faMedium} />
                </div>

            </div>
        </div >

    )
}

export default NavBar

