import {useState, useEffect, useRef} from "react";
import ReactDOM from "react-dom/client";

function TrackApprender() {
  const [inputValue, setInputvalue] = useState("");

  // using useRef to track app renders
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
    <input 
      type="text"
      value={inputValue}
      onChange={(e) => setInputvalue(e.target.value)}
    />
    <h1>Render Count: {count.current}</h1>
    </>
  );
}

// using useRef Hook to access DOM elemtns
function AccessDOMElements() {
  const inputElement = useRef();

  // using useRef to focus the input element
  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
    <input type="text" ref={inputElement}/>
    <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

// using useRef to track state changes
function TrackStateChanges() {
  const [inputValue2, setInputValue2] = useState("");
  const previousInputValue2 = useRef("")

  useEffect(() => {
    previousInputValue2.current = inputValue2;
  }, [inputValue2]);

  return (
    <>
    <input
      type="text"
      value={inputValue2}
      onChange={(e) => setInputValue2(e.target.value)}
    />
    <h2>Current Value: {inputValue2}</h2>
    <h2>Previous Value: {previousInputValue2.current}</h2>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
const root2 = ReactDOM.createRoot(document.getElementById("root2"))
const root3 = ReactDOM.createRoot(document.getElementById("root3"))

root.render(<TrackApprender />);
root2.render(<AccessDOMElements />);
root3.render(<TrackStateChanges />);