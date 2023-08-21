import React, { useState } from "react";

function App() {
  
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);
  
  function handleChange(event) {
    const newToDo = event.target.value;

    setToDo(newToDo);

    };
  
  function handleClick(){
    setToDoList(prevItems => {
    return [...prevItems, toDo];
  });
  setToDo("");
}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form" >
        <input onChange={handleChange} type="text" value={toDo}/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {toDoList.map((toDoItem)=> <li>{toDoItem}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
