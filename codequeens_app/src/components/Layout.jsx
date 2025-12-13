import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const Layout = ({ children }) => {
  const {} = useContext(ThemeContext);
  return (
    <div>
      <h1>Header</h1>
      {children}
      <h1>Header</h1>
    </div>
  );
};
