import React, { useState, useEffect } from "react";
import PriceInfo from "./PriceInfo/index.js";
// eslint-disable-next-line react/prop-types
function MainContent({ selected }) {
  const [data, setData] = useState({});

  useEffect(async () => {
    const url = "http://localhost:3000/";
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
  }, []);
  // helper function just for now, to save me from being annoyed at all the broken images
  const renderImg = (source) => {
    return (
      source && <img src={source} alt="a pic of something related to coffee" />
    );
  };

  const currentPageData = data[selected];
  if (!currentPageData) return null;
  return (
    <main className="main-content">
      <h1>{currentPageData.title}</h1>
      <p>{currentPageData.content}</p>
      {currentPageData.title === "The Cost" && <PriceInfo />}
      {renderImg(currentPageData.img)}
      {renderImg(currentPageData.img2)}
    </main>
  );
}

export default MainContent;
