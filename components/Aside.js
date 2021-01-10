import React from "react"

function Aside(props) {
    return(
        <aside className="sidebar-main">
            <ul className="sidebar-categories">
                <li className="sidebar-item" onClick={()=>props.handleSelect("thePlant")}>The Plant</li>
                <li className="sidebar-item" onClick={()=>props.handleSelect("theProcess")}>The Process</li>
                <li className="sidebar-item" onClick={()=>props.handleSelect("thePreparation")}>The Preparation</li>
                <li className="sidebar-item" onClick={()=>props.handleSelect("thePresentation")}>The Presentation</li>
            </ul>
        </aside>
    )
}

export default Aside