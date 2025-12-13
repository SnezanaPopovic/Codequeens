import React from "react";

const StopButton = React.memo(({ onStop }) => {
  console.log("StopButton render");
  return <button onClick={onStop}>Stop</button>;
});

export default StopButton;
