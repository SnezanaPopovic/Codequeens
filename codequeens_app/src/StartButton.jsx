import React from "react";

const StartButton = React.memo(({ onStart }) => {
  console.log("StartButton render");
  return <button onClick={onStart}>Start</button>;
});

export default StartButton;
