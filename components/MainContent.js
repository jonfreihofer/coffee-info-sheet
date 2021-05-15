import React, { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
function MainContent({ selected }) {
  const [data, setData] = useState({});

  useEffect(async () => {
    const url = "http://localhost:3000/";
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
  }, []);

  const currentPageData = data[selected];

  if (!currentPageData) return null;
  return (
    <main className="main-content">
      <h1>{currentPageData.title}</h1>
      <p>{currentPageData.content}</p>
    </main>
  );
}

export default MainContent;
