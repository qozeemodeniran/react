import React from 'react';
import ReactDOM from 'react-dom/client';

// create first element
const myFirstElement = <h1>Hello, this is my first React element!</h1>

// create root
const root = ReactDOM.createRoot(document.getElementById('root'));

// render element
root.render(myFirstElement);