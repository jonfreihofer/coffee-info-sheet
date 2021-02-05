import React, { useState } from "react";
import Aside from "../Aside";
import MainContent from "../MainContent";
import { StyledContentContainer } from "./styles";

function ContentContainer() {
  const [selected, setSelected] = useState("thePlant");
  const handleSelect = (option) => {
    setSelected({ selected: option });
  };
  return (
    <StyledContentContainer>
      <div className="container-main">
        <Aside handleSelect={handleSelect} />
        <MainContent selected={selected} handleSelect={handleSelect} />
      </div>
    </StyledContentContainer>
  );
}

export default ContentContainer;
