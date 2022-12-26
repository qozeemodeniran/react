import {React, useState} from 'react';
import ReactDOM from 'react-dom/client';
import Todos from "./Todos";
import "./App.css";
import Car from './Car.js';
import './style1.scss';

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <Todos todos={todos}/>
      <hr />
      <div>
        <p>Click button to increase number</p>
        Count:  {count}
        <button onClick={increment}> + </button>
      </div>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);