import {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";

const Home = () => {
  const [data, setData] = useState(null);

// Use the JSONPlaceholder service to fetch fake "todo" items and display the titles on the page:
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => setData(data));
}, []);

return (
  <>
  {
    data &&
    data.map((item) => {
      return <p key={item.id}>{item.title}</p>;
    })
  }
  </>
);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);

// we would extract the fetch login to a new file named "useFetch" (making it become a custom hook), reasins been that this login might be needed in other components.