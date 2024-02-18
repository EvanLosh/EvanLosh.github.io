import React from "react"

function NavBar() {

    return (

        <ul id='nav'>
            <li className="navlink"><a href="/">Home</a></li>
            <li className="navlink"><a href="/about">About Me</a></li>
            <li className="navlink">Projects</li>
            <li className="navlink">Blog Posts</li>
        </ul>

    )
}

export default NavBar