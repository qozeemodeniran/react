// -------------ARRAY METHODS-----------------
import React from 'react';
import ReactDOM from 'react-dom/client';

// create an array
const array1 = ["One", "Two", "Three", "Four"];

// use map() to generate a list from the array
const list1 = array1.map((item) => <p>{item}</p>);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(list1);
