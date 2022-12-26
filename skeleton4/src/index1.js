import React from 'react';
import ReactDOM from 'react-dom/client';

// creat function component, and pass property
function Student(props) {
  return (
    <>
    <h1>Holla, my name is {props.firstname} Odeniran.</h1>
    </>
  ); 
}
// create component
const fname = <Student firstname="Qozeem"/>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(fname);