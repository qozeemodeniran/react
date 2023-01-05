import {memo} from "react";

const Todos = ({todos, addTodo}) => {
    console.log("child render");
    return (
        <>
        <h2>My Tasks</h2>
        {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Task</button>
        </>
    );
};

export default memo(Todos);