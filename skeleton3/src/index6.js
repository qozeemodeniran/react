import React from 'react'
import ReactDOM from 'react-dom/client'

// props
class Student extends React.Component {
  render(){
    return <p>I am a student with a {this.props.color} eyes.</p>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Student color="black"/>);