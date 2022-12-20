import React from 'react'
import ReactDOM from 'react-dom/client'

// component constructor
class Student extends React.Component {
  constructor() {
    super();
    this.state = {color: "brown"};
  }

  render() {
    return <p>The student haa a {this.state.color} eyes.</p>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Student />);