import {React, useState} from 'react';
import ReactDOM from 'react-dom/client';

function Gender() {
  const [gender, setGender] = useState("Male");

  const handleChange = (event) => {
    setGender(event.target.value)
  }

  return (
    <>
    <form>
      <fieldset>
        <legend>User Form</legend><br />
        Gender:<br/><br/>
        <select value={gender} onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </fieldset>
    </form>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Gender />);