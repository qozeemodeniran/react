import React from 'react'
import ReactDOM from 'react-dom/client'

// class components in components
class Student extends React.Component {
  render() {
    return <p>Hello, I am a student at GSU.</p>;
  }
}

class Info extends React.Component {
  render(){
    return (
      <>
        <h1>See more about me below:</h1>
        <Student />
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Info/>);