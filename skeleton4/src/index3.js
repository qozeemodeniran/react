import React from "react";
import ReactDOM from "react-dom/client";

function Family(props) {
    return (
        <>
        {/* specify attribut name */}
        <p>Hey, so you belong to the {props.surname} clan?</p>
        </>
    )
}

function Balogun() {
    // define attibute value here
    const lastname = "Balogun";
    return (
        <>
        <h1>What clan do you represent?</h1>

        {/* pass/use atttribute value here */}
        <Family surname={lastname}/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Balogun />);