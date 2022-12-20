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

  // changing the state of object
  changeDegree = () => {
    this.setState({degree: "Phd"});
  }
  render() {
    return (
      <>
      <p>Holla, my name is {this.state.name}</p>
      <p>I am a {this.state.degree} degree student, majoring in {this.state.major}.</p>
      <button type="button" onClick={this.changeDegree}>Change Degree</button>
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Student/>);