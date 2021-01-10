import React from "react"
import data from "../data"

//utility function to retreive data 
function getPageContent(selected) {
    console.log(data, selected)
    return data[selected];
}

function MainContent(props) {
 const contentData = getPageContent(props.selected)
    const { content, title } = contentData
    return(
        <main className="main-content">
            <h1>{title}</h1>
            <p>{content}</p>
        </main>
    )
}

export default MainContent