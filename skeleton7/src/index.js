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
  const students = [
    {first: 'Qozeem', last: 'Odeniran'},
    {first: 'Jibril', last: 'Odeniran'},
    {first: 'Neema', last: 'Odeniran'}
  ];
  return(
    <>
    <h1>Hello, kindly tell us your names.</h1>
    <ul>
      {/* including a k */}
      {students.map((student) => <Student key={student.last} student_name={student.first} />)}
    </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Names />);