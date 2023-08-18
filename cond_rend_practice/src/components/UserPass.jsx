import React from 'react';
import Input from './Input';

function UserPass(){
    return(
    <div>
    <Input type="text" placeholder="Username" />
    <Input type="password" placeholder="Password" />
    </div>)
}

export default UserPass;