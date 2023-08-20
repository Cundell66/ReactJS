import React, { useState } from "react";


function App() {

  const [headingText, setHeadingText] = useState("Hello");
  const [bgColor, setBgColor] = useState("white");

  function handleClick() {
    setHeadingText(headingText + " " + "Clicked");
  }

  function colorChange() {
    setBgColor("black")
  }

  function changeBack() {
    setBgColor("white")
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={colorChange}
        onMouseOut={changeBack}
        style={{ backgroundColor: bgColor }}
        onClick={handleClick}>
        Submit
      </button>
    </div>
  );
}

export default App;
