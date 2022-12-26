import React from 'react';
import ReactDOM from 'react-dom/client';

import {useState} from 'react';

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    alert(`Your Name is ${name}, Email is ${email}, and Password is ${password}`)
  }
  
  return(
    <>
    <form onSubmit={submitHandler}>
      <fieldset>
        <legend>User Registration Form</legend>
        Name<br/>
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br/><br/>
        
        Email<br/>
        <input 
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br/><br/>

        Password<br/>
        <input 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br/><br/>
        <input type="submit"/>
      </fieldset>
    </form>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Register />);