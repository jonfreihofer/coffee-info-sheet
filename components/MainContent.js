import React from "react";
import data from "../data";

//utility function to retreive data
function getPageContent(selected) {
  return data[selected];
}

function MainContent({ selected }) {
  const contentData = getPageContent(selected);
  const { content, title } = contentData;
  console.log(selected);

  return (
    <main className="main-content">
      <h1>{title}</h1>
      <p>{content}</p>
    </main>
  );
}

export default MainContent;
