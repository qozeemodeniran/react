import {React, useState} from 'react';
import ReactDOM from 'react-dom/client';

function Register() {
  const [textarea, setTextarea] = useState(
    "Text-area's content resides in th 'value' attribute in React"
  );

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  return (
    <>
    <form>
      <fieldset>
        <legend>User Form</legend><br />
        Content:<br/><br/>
        <input 
          value={textarea} onChange={handleChange}
        />
      </fieldset>
    </form>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Register />);