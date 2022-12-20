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

// componentDidMount: This is where you run statements that requires that the component is already placed in the DOM. At first degree is Masters, but give me two seconds, and it is PhD instead:

componentDidMount() {
  setTimeout(() => {
    this.setState({degree: "PhD"})
  }, 2000)
}

  render() {
    return <p>I am {this.state.degree} student, majoring in {this.state.major}.</p>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Student />);