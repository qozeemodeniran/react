import {React, useState} from 'react';
import ReactDOM from 'react-dom/client';

function Register() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>User Form</legend><br /> <br />
        Name:<br/><br/>
        <input 
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        /><br /> <br />

        Password:<br/><br/>
        <input 
          type="password"
          name="password"
          value={inputs.password || ""}
          onChange={handleChange}
        /><br /> <br />

        <input type="submit" />
      </fieldset>
    </form>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Register />);