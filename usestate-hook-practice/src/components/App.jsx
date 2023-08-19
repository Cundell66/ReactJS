import React, {useState} from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [displayTime, setTime] = useState(time);

  function getTime() {
    let time = new Date().toLocaleTimeString();
    setTime(time);
  }
  
  setInterval(getTime, 1000);
  
  return (

    <div className="container">
      <h1>{displayTime}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
