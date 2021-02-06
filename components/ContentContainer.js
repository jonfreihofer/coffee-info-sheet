import React, { useState } from "react";
import Aside from "./Aside";
import MainContent from "./MainContent";

function ContentContainer() {
  const [selected, setSelected] = useState({ selected: "thePlant" });
  function handleSelect(option) {
    setSelected({ selected: option });
  }
  return (
    <div className="container-main">
      <Aside handleSelect={handleSelect} />
      <MainContent selected={selected} handleSelect={handleSelect} />
    </div>
  );
}

export default ContentContainer;
