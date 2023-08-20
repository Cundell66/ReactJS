import React, { useState } from "react";


function App() {

  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChangeName(event) {

    const {value, name} = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lname: prevValue.lName
        }
      } else if
        (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
          
        }
      }
    }
    );
  }


  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input
          onChange={handleChangeName}
          name="fName"
          placeholder="First Name"
        value={fullName.fName}
        />
        <input
          onChange={handleChangeName}
          name="lName"
          placeholder="Last Name"
        value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
