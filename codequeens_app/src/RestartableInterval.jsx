import React, { useState, useEffect } from "react";

function RestartableInterval() {
  const [count, setCount] = useState(0);
  const [speed, setSpeed] = useState(1000);

  useEffect(() => {
    console.log(`Pokrecem interval sa brzinom ${speed}ms`);
    const interval = setInterval(() => {
      setCount((prevValue) => prevValue + 1);
    }, speed);

    return () => {
      clearInterval(interval);
      console.log(`cistim interval od ${speed}ms`);
    };
  }, [speed]);

  return (
    <div>
      <h2>5.Interval koji se ponovo pokrece</h2>
      <p>Brojac: {count}</p>
      <label>
        Brzina intervala:{" "}
        <select
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        >
          <option value={500}>500ms</option>
          <option value={1000}>1000ms</option>
          <option value={2000}>2000ms</option>
        </select>
      </label>
    </div>
  );
}
export default RestartableInterval;
