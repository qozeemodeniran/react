import React from 'react';
import ReactDOM from 'react-dom/client';

function Student() {
  
  // create event handler
  const intro = () => {
    alert("Hello, my name is Qozeem Odeniran");
  }

  return (
    <>
    {/* event triger */}
    <button onClick={intro}>Introduce</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Student />);