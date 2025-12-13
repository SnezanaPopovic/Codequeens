import React, { useState, useMemo } from "react";
function SquareExample() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  const square = (n) => {
    return n * n;
  };

  const squared = useMemo(() => square(count), [count]);
  const squaredWrong = useMemo(() => square(count), [other]);
  return (
    <div>
      <h2>Kvadrat broja</h2>
      <p>Count: {count}</p>
      <p>Ispravno kvadrat: {squared}</p>
      <p>Gresno kvadrat: {squaredWrong}</p>

      <div>
        <button onClick={() => setCount(count + 1)}>+ Count</button>
        <button onClick={() => setOther(other + 1)}>+ Other</button>
      </div>
    </div>
  );
}

export default SquareExample;
