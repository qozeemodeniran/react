import React from 'react';
import ReactDOM from 'react-dom/client';

// usign && to render react component

function Grade(props) {
  const score = props.score;

  return(
    <>
    <h1>Student's Grade</h1>
    {
      score > 90 &&
      <h2>Congratulations, you got {score} in your exam, and that is equivalent to an "A"</h2>
    }
    </>
  );
}

const score = 91;
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Grade score={score}/>);