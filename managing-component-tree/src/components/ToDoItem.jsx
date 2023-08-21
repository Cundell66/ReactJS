import React from "react";

function ToDoItem(props) {
  const { id, text, isDone, onClicked } = props;
  
  return (
    <div onClick={() => {onClicked(id);}}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {text}{" "}
      </li>
    </div>
  );
}

export default ToDoItem;