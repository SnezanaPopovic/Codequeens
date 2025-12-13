import React, { useState, useEffect, useCallback } from "react";
import StartButton from "./StartButton";
import StopButton from "./StopButton";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running]);

  const startTimer = useCallback(() => setRunning(true), []);
  const stopTimer = useCallback(() => setRunning(false), []);

  return (
    <div>
      <h2>Tajmer</h2>
      <p>Sekunde: {seconds}</p>
      <div>
        <StartButton onStart={startTimer} />
        <StopButton onStop={stopTimer} />
      </div>
    </div>
  );
};

export default Timer;
