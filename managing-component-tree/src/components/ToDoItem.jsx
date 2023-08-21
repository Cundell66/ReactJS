import React, {useState} from 'react';

function ToDoItem(todoItem) {
    const [textDec, setTextDec] = useState("");
    
    // function handleClick(){
    //     (textDec === "")? setTextDec("line-through"):setTextDec("");
    // }
    return (
        <div>
            
            <input type="checkbox" name="checkbox" value=""></input>
            {console.log(checkbox)}
            <li >{todoItem}</li>
        </div>)
}

export default ToDoItem;