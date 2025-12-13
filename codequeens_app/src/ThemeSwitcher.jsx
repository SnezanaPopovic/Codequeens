import React, { useState, useEffect } from "react";

function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    console.log(`Efekat pokrenut za ${theme} mode`);

    return () => {
      console.log(`Cleanup: uklanjam ${theme} mode`);
    };
  }, [theme]);

  const containerStyle = {
    backgroundColor: theme === "light" ? "#f8f8f8" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    border: "1px solid #ccc",
    marginTop: "20px",
    borderRadius: "8px",
  };

  return (
    <div style={containerStyle}>
      <h2>4.Cleanup prilikom promene teme</h2>
      <p>Trenutna tema: {theme}</p>
      <button onClick={() => setTheme("light")}>Light mode</button>
      <button onClick={() => setTheme("dark")} style={{ marginLeft: "10px" }}>
        Dark mode
      </button>
    </div>
  );
}

export default ThemeSwitcher;
