import React from 'react';
import ReactDOM from 'react-dom/client';

import './my-sass.scss';

const Header = () => {
  return (
    <>
      <h1>React.js Tutorial</h1>
      <p>Holla, welcome to my React.js Tutorial.</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);