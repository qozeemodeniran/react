import {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);

    // adding the count variable makes it such that when the variable updates, the effect will run
  }, [count]);

  return (
    <>
    <p>Count: {count}</p>
    <button onClick={() => setCount((c) => c + 1)}>+</button>
    <p>Calculation: {calculation}</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter />);