import React from "react";
import contacts from "../contacts";

function Card(props){
    return <div className="card">
    <div className="top">
      <h2 className="name">{contacts[props.contact].name}</h2>
      <img className = "circle-img"
        src={contacts[props.contact].imgURL}
        alt="avatar_img"
      />
    </div>
    <div className="bottom">
      <p>{contacts[props.contact].phone}</p>
      <p>{contacts[props.contact].email}</p>
    </div>
  </div> 
}


function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card contact="0"/>
      <Card contact="1"/>
      <Card contact="2"/>
    </div>
  );
}

export default App;
