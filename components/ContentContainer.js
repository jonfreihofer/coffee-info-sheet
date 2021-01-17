import React, {Component} from "react";
import Aside from "./Aside";
import MainContent from "./MainContent";

class ContentContainer extends Component {
  constructor() {
    super();
    this.state = {
      selected: "thePlant",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect = option => {
    this.setState({selected: option});
  };

  render() {
    return (
      <div className="container-main">
        <Aside handleSelect={this.handleSelect} />
        <MainContent
          selected={this.state.selected}
          handleSelect={this.handleSelect}
        />
      </div>
    );
  }
}

export default ContentContainer;
