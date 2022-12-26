import {memo} from "react";

const Todos = ({todos}) => {
    console.log("child render");

    const CSS = {
        fontFamily: "arial-black",
        padding: "9.7px"
    }

    return (
        <>
            <h2 style={{color: "yellow", backgroundColor: "black"}}>My Todos</h2>
            <h3 style={CSS}>Holla, here are your todos</h3>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
        </>
    );
} 

// Wrap the Todos component export in memo: to prevent needlessly re-rendering.
export default memo(Todos);