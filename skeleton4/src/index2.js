import React from 'react';
import ReactDOM from 'react-dom/client';

// Sending property from one component to another
function Student(props) {
  return (
    <>
    <p>Hello, I am Qozeem {props.lastname}.</p>
    </>
  );
}

function Qozeem() {
  return (
    <>
    <h1>Hey, what's your name?</h1>

    {/* render the component with props here */}
    <Student lastname="Odeniran"/>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Qozeem />);