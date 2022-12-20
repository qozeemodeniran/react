import React from 'react';
import ReactDOM from 'react-dom/client';

// first component
function Student() {
  return <p>I am a student at Georgia Southern University</p>;
}

// second component
function More() {
  return (
    <>
      <p>See more about me below:</p>
      <Student />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<More />);