import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar";
import ContentContainer from "./components/ContentContainer";

function App() {
  return (
    <>
      <NavBar />
      <ContentContainer />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
