import React, { Component } from "react";
import Aside from "../Aside";
import MainContent from "../MainContent";
import { StyledContentContainer } from "./styles";

class ContentContainer extends Component {
  constructor() {
    super();
    this.state = {
      selected: "thePlant",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect = (option) => {
    this.setState({ selected: option });
  };

  render() {
    return (
      <StyledContentContainer>
        <div className="container-main">
          <Aside handleSelect={this.handleSelect} />
          <MainContent
            selected={this.state.selected}
            handleSelect={this.handleSelect}
          />
        </div>
      </StyledContentContainer>
    );
  }
}

export default ContentContainer;
