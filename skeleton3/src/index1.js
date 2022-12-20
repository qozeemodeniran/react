import React from 'react';
import ReactDOM from 'react-dom/client';

// create a function component that returns html
function Student(props) {
  return <p>Hello, I am a GSU student, majoring in {props.major} department</p>;

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Student major="Information Technology"/>);