import React from "react";
import data from "../../data";
import { StyledMainContent } from "./styles";

// utility function to retreive data
function getPageContent(selected) {
  return data[selected];
}

function MainContent(props) {
  const contentData = getPageContent(props.selected);
  const { content, title } = contentData;
  return (
    <StyledMainContent>
      <div className="container-main">
        <Aside />
        <MainContent />
      </div>
    </StyledMainContent>
  );
}

export default MainContent;
