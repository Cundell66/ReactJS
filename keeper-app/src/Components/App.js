import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {notes.map( note => (
    <div>
      <Header />
      <Note title = {note.title} content={note.content}/>
      <Footer />
    </div>
));
}

export default App;
