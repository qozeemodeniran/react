import React from 'react';
import ReactDOM from 'react-dom/client';

function Login() {
  return (
    <>
    <form>
      <fieldset>
        <legend>User Login Form</legend>
      Username/Email<br/><input type="text"/><br/><br/>
      Password<br/><input type="password" /><br/><br/>
      <input type="submit" value="Submit"/>
      </fieldset>
    </form>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Login />);