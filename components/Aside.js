import React from "react";

function Aside({ handleSelect }) {
  return (
    <aside className="sidebar-main">
      <ul className="sidebar-categories">
        <li
          className="sidebar-item"
          onClick={() => handleSelect("theCost")}
        >
          The Cost
        </li>
        <li
          className="sidebar-item"
          onClick={() => handleSelect("theProcess")}
        >
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
    </aside>
  );
}

export default Aside;
