import React from "react";
import Login from "./Login"

var isLoggedIn = false;


function renderConditional() {
  if (isLoggedIn) {
    return <h1>Hello</h1>
  } else {
    return <Login />
    
  }
}

function App() {
  return (
    <div className="container">
      {renderConditional()}

    </div>
  );
}

export default App;
