import React from "react";
import ReactDOM from "react-dom/client";

function Family(props) {
    return (
        <>
        {/* specify attribut name */}
        <p>Holla, my name is {props.surname.firstname}, and I am {props.surname.age} years old</p>
        </>
    )
}

function About() {
    // define attibute value(object) here
    const lastname = {firstname: "Qozeem", age: 28};
    return (
        <>
        <h1>Hey, what's your name and age?</h1>

        {/* pass/use atttribute value here */}
        <Family surname={lastname}/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<About />);