import React, {useState} from 'react';



function ToDoItem(todoItem) {

    const [isDone, setIsDone] = useState("false");
    
    var styling = "text-decoration:"
    function handleClick() {
        console.log("Changed");
        setIsDone(prevValue=> {
            return !prevValue
        });
    } 
    
    return (

        <div onClick={handleClick}>
            <li style={{ textDecoration: isDone? "line-through" : "none"}}>{todoItem} </li>
        </div>
    )

}

export default ToDoItem;