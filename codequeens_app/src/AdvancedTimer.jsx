import React, { useState, useRef, useEffect } from "react";

function AdvancedTimer() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);
  const lapsRef = useRef([]);

  const Start = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => {
          if (prev >= 60) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            return prev;
          }
          return prev + 1;
        });
      }, 1000);
    }
  };

  const Stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const Reset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setSeconds(0);
    lapsRef.current = [];
  };

  const Lap = () => {
    if (lapsRef.current.length >= 5) return;
    lapsRef.current.push(seconds);
  };

  const FastestLap = () => {
    if (lapsRef.current.length < 2) return null;
    let minDiff = Infinity;
    for (let i = 1; i < lapsRef.current.length; i++) {
      const diff = lapsRef.current[i] - lapsRef.current[i - 1];
      if (diff < minDiff) minDiff = diff;
    }
    return minDiff;
  };
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <h2>Advanced Timer</h2>
      <h1>{seconds}s</h1>

      <div>
        <button onClick={Start}>Start</button>
        <button onClick={Stop}>Stop</button>
        <button onClick={Reset}>Reset</button>
        <button onClick={Lap}>Lap</button>
      </div>

      <h3>Lap vrednosti:</h3>
      <ul>
        {lapsRef.current.map((lap, i) => (
          <li key={i}>{lap}s</li>
        ))}
      </ul>

      {FastestLap() !== null && (
        <p>Najbrzi krug: {FastestLap()} sekundi razlike</p>
      )}
    </div>
  );
}

export default AdvancedTimer;
