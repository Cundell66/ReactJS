import React from "react";
import UserPass from "./UserPass";
import Input from "./Input";
import Button from "./Button";


function Form(props) {
  ;
    return (
      <form className="form">
        <UserPass />
        {!props.reg && <Input type="password" placeholder="Confirm Password" />}
        <button type="submit"> 
          {props.reg ? "Login" : "Register"}
        </button>
      </form>
      )
  }


export default Form;
