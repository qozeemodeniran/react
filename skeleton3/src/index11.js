import React from 'react'
import ReactDOM from 'react-dom/client'

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Qozeem Odeniran",
      major: "Information Technology",
      degree: "Masters"
    };
  }

  // getDerivedStateFromProps: This is the natural place to set the state object based on the initial props. It takes state as an argument, and returns an object with changes to the state.
  static getDerivedStateFromProps(props, state) {
    return {degree: props.mydegree};
  }

  render() {
    return <p>I am {this.state.degree} student, majoring in {this.state.major}.</p>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Student mydegree="PhD"/>);