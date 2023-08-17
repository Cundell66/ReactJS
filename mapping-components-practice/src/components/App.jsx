import React from "react";
import emojipedia from "../emojipedia";
import createEntry from "./CreateEntry";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      

      <dl className="dictionary">
        {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
