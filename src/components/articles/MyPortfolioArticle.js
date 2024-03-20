import React from "react"

function MyPortfolioArticle() {
    return (
        <div>
            <h1 id="my-portfolio-article">My portfolio website</h1>

            <a href='https://github.com/EvanLosh/EvanLosh.github.io'>https://github.com/EvanLosh/EvanLosh.github.io</a>

            <p>My portfolio website is a React app that I built myself and deployed with Netlify. </p>

            <p>Among the design and technical features of my project are</p>
            <ul>
                <li>A React Router with Netlify redirects</li>
                <li>Dynamic routes with the useParams hook</li>
                <li>Custom CSS animations with gradients and Bezier curves</li>
                <li>Use of sessionStorage to toggle the homepage animation</li>
                <li>Responsive UI</li>
                <li>FortAwesome's SVG brand icons</li>
            </ul>

        </div>
    )
}

export default MyPortfolioArticle