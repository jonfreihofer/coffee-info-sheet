import React from "react";
import data from "../../data";
import { StyledMainContent } from "./styles";

// utility function to retreive data
function getPageContent(selected) {
  return data[selected];
}

function MainContent(props) {
  const contentData = getPageContent(props);
  const { content, title } = contentData;
  return (
    <StyledMainContent>
      <div className="container-main">
        <h1>{title}</h1>
        <h2>{content}</h2>
      </div>
    </StyledMainContent>
  );
}

export default MainContent;
