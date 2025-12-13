import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Timer montiran");

    const interval = setInterval(() => {
      setSeconds((prevValue) => prevValue + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Timer unmountovan");
    };
  }, []);

  return <h3>Timer: {seconds} sekundi</h3>;
}

export default Timer;
