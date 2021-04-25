import React, { useState } from "react";
import Aside from "./Aside";
import MainContent from "./MainContent";

function ContentContainer(props) {
  const [selected, setSelected] = useState("theCost");
  const handleSelect = option => {
    setSelected(option);
  };
  return (
    <div className="container-main">
      <Aside handleSelect={handleSelect} />
      <MainContent
        selected={selected}
        handleSelect={handleSelect}
      />
    </div>
  );
}

export default ContentContainer;
