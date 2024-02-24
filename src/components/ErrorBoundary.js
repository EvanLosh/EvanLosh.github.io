import React from "react"


function ErrorBoundary({ errorMessage }) {
    return (
        <div id="error-boundary">
            <h1>{errorMessage}</h1>
            <p><a href='/'>Click here to return home</a></p>
        </div>
    )
}

export default ErrorBoundary