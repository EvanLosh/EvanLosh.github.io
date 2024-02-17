import React from "react"
import contents from "../data/contents.js"

const titlesJSX = contents.map(content => <p key={content.id}>{content.title}</p>)

function TableOfContents() {
    return (
        <div id="table-of-contents">TableOfContents
            {titlesJSX}
        </div>
    )
}

export default TableOfContents