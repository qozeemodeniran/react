// import React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// create HTML to render: using JSX(JavaScript XML syntax)
const html1 = (
    <h1>Students' Information</h1>
);
const html2 = (
    <table>
        <tr>
            <th>Name</th>
        </tr>
        <tr>
            <td>Qozeem Odeniran</td>
        </tr>
        <tr>
            <td>Jibril Odeniran</td>
        </tr>
    </table>
) ;

// create root

const header1 = ReactDOM.createRoot(document.getElementById('header1'));
const root1 = ReactDOM.createRoot(document.getElementById('root1'));

// render root
header1.render(html1);
root1.render(html2);