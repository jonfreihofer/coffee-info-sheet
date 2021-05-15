/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import StyledAside from "./styles";

// eslint-disable-next-line react/prop-types
function Aside({ handleSelect }) {
  return (
    <StyledAside>
      <ul className="sidebar-categories">
        <li className="sidebar-item" onClick={() => handleSelect("theCost")}>
          The Cost
        </li>
        <li className="sidebar-item" onClick={() => handleSelect("theProcess")}>
          The Process
        </li>
        <li
          className="sidebar-item"
          onClick={() => handleSelect("thePreparation")}
        >
          The Preparation
        </li>
        <li
          className="sidebar-item"
          onClick={() => handleSelect("thePresentation")}
        >
          The Presentation
        </li>
      </ul>
    </StyledAside>
  );
}

export default Aside;
