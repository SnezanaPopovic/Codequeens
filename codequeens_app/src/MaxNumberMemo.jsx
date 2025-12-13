import React, { useState, useMemo } from "react";

function MaxNumberMemo() {
  const [numbers, setNumbers] = useState([3, 7, 1]);

  const maxNumber = useMemo(() => {
    return Math.max(...numbers);
  }, [numbers]);

  const addNumber = () => {
    const newNumber = Math.floor(Math.random() * 100);
    setNumbers((prev) => [...prev, newNumber]);
  };

  return (
    <div>
      <h2>Maks br u nizu</h2>
      <p>Niz: {numbers.join(", ")}</p>
      <p>Max: {maxNumber}</p>
      <button onClick={addNumber}>Dodaj broj</button>
    </div>
  );
}
export default MaxNumberMemo;
