import React, { useState, useMemo } from "react";

function HeavyTextCount() {
  const [text, setText] = useState("");

  const countLetters = (txt) => {
    let count = 0;
    for (let i = 0; i < 5_000_000; i++) {
      count = txt.length;
    }
    return count;
  };

  const letterCount = useMemo(() => countLetters(text), [text]);

  return (
    <div>
      <h2>Brojanje slova</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Unesi tekst"
      />
      <p>Broj slova: {letterCount}</p>
    </div>
  );
}
export default HeavyTextCount;
