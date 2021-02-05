import React from "react";
import { StyledAside } from "./styles";

function Aside(props) {
  return (
    <StyledAside>
      <aside className="sidebar-main">
        <ul className="sidebar-categories">
          <li className="sidebar-item">
            <div onClick={() => props.handleSelect("thePlant")}>The Plant</div>
          </li>
          <li className="sidebar-item">
              <div onClick={() => props.handleSelect("theProcess")}>
              The Process
            </div>
          </li>
          <li className="sidebar-item">
            <div onClick={() => props.handleSelect("thePreparation")}>
              The Preparation
            </div>
          </li>
          <li className="sidebar-item">
            <div onClick={() => props.handleSelect("thePresentation")}>
              The Presentation
            </div>
          </li>
        </ul>
      </aside>
    </StyledAside>
  );
}

export default Aside;
