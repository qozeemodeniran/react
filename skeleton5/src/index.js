import React from 'react';
import ReactDOM from 'react-dom/client';

// create event handler inside the component: use arrow function to pass argument (object: intro and greet)
function TellMe() {
  const message = (intro, greet) => {
    alert(greet.type);
    /**
     * 'greet' represent React event that triggered the function(click event) 
     */
  }

  return (
    <>
    {/* use event handler here: set parameter value  */}
    <button onClick={(event) => message("Dear Viewer, trust you are doing greate. Thanks for viewing!", event)}>See Message!</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TellMe />);