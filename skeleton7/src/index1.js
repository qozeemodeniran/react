import React from 'react';
import ReactDOM from 'react-dom/client';

function Student(props) {
  return(
    <>
    <li>My name is {props.student_name}</li>
    </>
  );
}

function Names() {
  const students = ['Qozeem', 'Daniel', 'Ikeoluwa'];
  return(
    <>
    <h1>Hello, kindly tell us your names.</h1>
    <ul>
      {students.map((student) => <Student student_name={student} />)}
    </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Names />);