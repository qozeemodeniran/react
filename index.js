// import React
import React from 'react';

// import ReactDOM
import ReactDOM from 'react-dom/client';

// creat a function
function Hello(props) {

    // let the function return html element
    return <h1>Hello React</h1>;
}

// define root
const root = ReactDOM.createRoot(document.getElementById("root"));

// render root
root.render(<Hello />);