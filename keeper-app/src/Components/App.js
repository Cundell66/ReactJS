import React from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import notes from "../notes";

function App() {
    return (<div>
        <Header />,
        {notes.map(note => <Note {...note}/>)}
        {/* {notes.map(Note)} */}
        
        <Footer />
    </div>);
}

export default App;