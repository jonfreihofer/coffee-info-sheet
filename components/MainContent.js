import React from "react"

function MainContent(props) {

//utility function to retreive data 
    function getPageContent(selectedPage) {
        console.log(data)
        return data[selectedPage];
    }

    return(
        <main className="main-content">
            <h1>Some stuff</h1>
        </main>
    )
}

export default MainContent