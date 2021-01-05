import React, { Component } from "react"
import Aside from "./Aside"
import MainContent from "./MainContent"

class ContentContainer extends Component {
    constructor() {
        super();
        this.state = {
            selected: ""
        }
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect = (option) => {
        this.setState({ selected: option });
    }

    render() {
        return(
            <div className="container-main">
                <Aside />
                <MainContent selected={this.state.selected} />
            </div>
        )
    }
}

export default ContentContainer