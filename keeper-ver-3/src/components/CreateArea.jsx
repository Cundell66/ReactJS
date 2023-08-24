import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(true);
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setClicked(false);
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {(clicked !== false) && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        <textarea
          name="content"
          onClick={handleClick}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={(clicked)?"3":"1"}
        />
        <Zoom in={clicked}>
          <Fab onClick={submitNote}><AddTaskIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
