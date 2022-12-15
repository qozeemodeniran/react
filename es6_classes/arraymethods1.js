import React from 'react';
import ReactDOM from 'react-dom/client';


const arr = ["Qozeem", "Banji", "Odeniran"]

// use map to generate a list from the array above
list1 = arr.map((item) => <p>{item}</p>);

ReactDOM.render(list1, document.getElementById('root'));