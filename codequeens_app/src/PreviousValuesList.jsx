import React, { useState, useRef, useEffect } from "react";

function PreviousValuesList() {
  const [value, setValue] = useState("");
  const previousValues = useRef([]);

  useEffect(() => {
    if (value !== "") {
      previousValues.current.push(value);
    }
  }, [value]);

  return (
    <div>
      <h2>Previous Values Tracker</h2>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Unesi tekst..."
      />

      <p>Broj promena: {previousValues.current.length}</p>

      <ul>
        {previousValues.current.map((prev, index) => (
          <li key={index}>{prev}</li>
        ))}
      </ul>
    </div>
  );
}

export default PreviousValuesList;
