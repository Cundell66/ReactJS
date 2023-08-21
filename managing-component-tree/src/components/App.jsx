import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, { text: inputText, isDone: false }];
    });
    setInputText("");
  }

  // function handleClicked(index) {
  //   setItems(prevItems => {
  //     return prevItems.map((item, i) => {
  //       if (i === index) {
  //         return { ...item, isDone: !item.isDone };
  //       }
  //       return item;
  //     });
  //   });
  // }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter(
        (item, index)=> {
          return index !== id
        });
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={item.text}
              isDone={item.isDone}
              onClicked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
