import {memo} from "react";

const Todos = ({todos}) => {
    console.log("child render");

    return (
        <>
            <h3>Holla, here are your todos</h3>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
        </>
    );
} 
// Use memoto keep the Todos component from needlessly re-rendering.
export default memo(Todos);