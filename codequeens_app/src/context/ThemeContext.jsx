import { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "light",
  themeToggle: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    let theme = localStorage.getItem("theme");
    return theme ? theme : "light";
  });

  const themeToggle = () => {
    setTheme((prevValue) => {
      let newTheme = prevValue == "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, themeToggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
