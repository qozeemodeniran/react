import React from 'react'
import ReactDOM from 'react-dom/client'

// props in constructor
class Student extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return <p>I am an {this.props.department} student.</p>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Student department="IT"/>);
