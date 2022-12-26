import React from 'react';
import ReactDOM from 'react-dom/client';

// create event handler inside the component: use arrow function to pass argument
function TellMe() {
  const message = (intro) => {
    alert(intro);
  }

  return (
    <>
    {/* use event handler here: set parameter value  */}
    <button onClick={() => message("Holla, my name is Qozeem. I've got a mesage for ya.")}>See Message!</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TellMe />);