import React from "react"
import data from "/data"

//utility function to retreive data 
function getPageContent(selectedPage) {
    return data[selectedPage];
}

function MainContent(props) {
 const data = getPageContent(props.selectedPage)

    return(
        <main className="main-content">
            <h1>{data}</h1>
        </main>
    )
}

export default MainContent