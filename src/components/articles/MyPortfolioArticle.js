import React from "react"

function MyPortfolioArticle() {
    return (
        <div>
            <h1 id="my-portfolio-article">My portfolio website</h1>
            <p>This webpage is a React app that I made myself and deployed directly from Github. You can view the source code here: <a href='https://github.com/EvanLosh/EvanLosh.github.io'>https://github.com/EvanLosh/EvanLosh.github.io</a>.</p>

            <p>Among the technical features of my project are</p>
            <ul>
                <li>A React Router</li>
                <li>Dynamic routes with useParams</li>
                <li>Use of sessionStorage to show/hide certain components</li>
                <li>CSS animations</li>
                <li>Responsive UI</li>
                <li>FortAwesome's SVG brand icons</li>
            </ul>

        </div>
    )
}

export default MyPortfolioArticle