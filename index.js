import React from "react"
import ReactDom from "react-dom"
import NavBar from "./NavBar"




class App extends React.Component {
    render() {
        return(
            <div>
                <NavBar />
            </div>
        )
    }
}


ReactDOM.render(<App /> , document.getElementById("root"));
