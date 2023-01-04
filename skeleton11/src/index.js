import React from 'react';
import ReactDOM from 'react-dom/client';

// imoort CSS stylesheet: I would only change the page's backgroud color in the file
import './App.css';

// import Lecture component
import Lecture from './Lecture';

const Header = () => {

  {/* creating an object for CSS styling */}
  const styles = {
    color: "white",
    backgroundColor: "black",
    fontFamily: "serif",
    padding: "10px",
    margin: "5px"
  } ;

  return (
    <>
    {/* use inline-css */}
    <h1 style={{color: "blue"}}>Holla, this is a blue header</h1>

    {/* notice the use camelcase instead of hypen separator*/}
    <p style={{backgroundColor: "yellow"}}>This uses an inline-css styling</p>

    {/* use sigble curly braces to invoke css-styling object */}
    <div style={styles}>Hey, my name is Qozeem Odeniran. and I would be your facilitator for today's React.js class.</div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(<Lecture />);
