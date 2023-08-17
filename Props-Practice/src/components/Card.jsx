import React from 'react';
import contacts from "../contacts";
import Avatar from './Avatar';
import Detail from './Detail';

function Card(props){
    return <div className="card">
    <div className="top">
      <h2 className="name">{contacts[props.contact].name}</h2>
      <Avatar img={contacts[props.contact].imgURL} />
    </div>
    <div className="bottom">
      <Detail detail= {contacts[props.contact].phone}/>
      <Detail detail = {contacts[props.contact].email}/>
    </div>
  </div> 
}

export default Card;