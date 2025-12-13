import { useState, useEffect } from "react";

function KeyPressCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function handleKeyDown() {
      setCount((prevValue) => prevValue + 1);
    }

    window.addEventListener("keydown", handleKeyDown);
    console.log("Listener aktivan");

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      console.log("Listener uklonjen");
    };
  }, []);
  return (
    <div>
      <h2>2.Brojanje pritisaka na taster</h2>
      <h3>Broj pritisaka: {count}</h3>
    </div>
  );
}

export default KeyPressCounter;
