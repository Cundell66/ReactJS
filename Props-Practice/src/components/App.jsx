import React from "react";
import Card from "./Card";
import Avatar from "./Avatar";


function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://media.licdn.com/dms/image/C5103AQHtBh7QM-18mA/profile-displayphoto-shrink_800_800/0/1516683750039?e=2147483647&v=beta&t=0bQnt2Kg3wrJBaoT3XHavNPwNdg2yj0x4NvQOxf61fI" />
      <Card contact="0"/>
      <Card contact="1"/>
      <Card contact="2"/>
    </div>
  );
}

export default App;
