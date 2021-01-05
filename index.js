import React from "react"
import ReactDOM from "react-dom"
import NavBar from "./NavBar"
import ContentContainer from "./ContentContainer"

function App() {
        return(
            <div>
                <NavBar />
                <ContentContainer />
            </div>
        )
}

ReactDOM.render(<App /> , document.getElementById("root"));
