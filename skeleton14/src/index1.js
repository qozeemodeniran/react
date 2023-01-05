import {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(() => count + 1);
    }, 1000);

    // clean up side effects that are no longer needed
    return () => clearTimeout(timer);

    // adding an empty angle bracket[] here makes the effect only run on the first render
  }, []);

  return (
    <>
    <h1>This component has been rendered {count} times.</h1>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Timer />);