/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { StyledAside } from "./styles";
// eslint-disable-next-line react/prop-types
export default function Aside({ handleSelect }) {
  return (
    <StyledAside>
      <ul className="sidebar-categories">
        <li className="sidebar-item" onClick={() => handleSelect("theCost")}>
          Cost
        </li>
        <li className="sidebar-item" onClick={() => handleSelect("theProcess")}>
          Process
        </li>
        <li
          className="sidebar-item"
          onClick={() => handleSelect("thePreparation")}
        >
          Roasting
        </li>
        <li
          className="sidebar-item"
          onClick={() => handleSelect("thePresentation")}
        >
          Brewing
        </li>
      </ul>
    </StyledAside>
  );
}
