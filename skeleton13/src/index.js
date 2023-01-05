import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

function Fullname() {
  const [fullname, setFullname] = useState("Qozeem");

  // create one state and include an object
  const [about, setAbout] = useState({
    name: "Qozeem Banji Odeniran",
    major: "Information Technology",
    degree: "Masters in Information Technology",
    cgpa: "4.0"
  });

  // updateing an item in the about object using the spread operator (...)

  const updateName = () => {
    setAbout(previousMiddleName => {
      return {...previousMiddleName, name: "Qozeem Oluwabamiji Odeniran"}
    });
  }

  return (
    <>
    <h1>My name is {fullname}</h1>

    <button 
      type='button' 
      onClick={() => setFullname("Banji")}>Middlename
    </button>

    <button
      type='button'
      onClick={() => setFullname("Odeniran")}>Lastname
    </button>

    <button
      type='button'
      onClick={() => setFullname("Qozeem")}>Firstname
    </button>

    <div>Holla, my full name is {about.name}, pursuing a graduate degree in {about.degree}, majoring in {about.mjor}. I have a current CGPA of {about.cgpa}</div>

    <button type="button" onClick={updateName}>Update Name</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Fullname />);