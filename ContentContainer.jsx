import React from "react";
import Aside from "./Aside";
import MainContent from "./MainContent";

function ContentContainer() {
  return (
    <div className="container-main">
      <Aside />
      <MainContent />
    </div>
  );
}

export default ContentContainer;
