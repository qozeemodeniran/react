import React from 'react';
import ReactDOM from 'react-dom/client';

// create class component
class Student extends React.Component {
  render() {
    return <p>Hello, I am a class component</p>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Student />);