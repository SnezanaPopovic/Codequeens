import { useState, useEffect } from "react";

function ApiSelectorAndCounter() {
  const [selected, setSelected] = useState("posts");
  const [data, setData] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${selected}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Greška:", error));
  }, [selected]);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setCount((prevValue) => prevValue + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div>
      <h2>API</h2>

      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        <option value="posts">Posts</option>
        <option value="users">Users</option>
        <option value="comments">Comments</option>
      </select>

      <h3>Prvih 5 {selected}:</h3>
      <ul>
        {data.slice(0, 5).map((item) => (
          <li key={item.id}>
            {selected === "users" ? item.name : item.title || item.body}
          </li>
        ))}
      </ul>

      <h3>Brojac {count}</h3>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
    </div>
  );
}
export default ApiSelectorAndCounter;
