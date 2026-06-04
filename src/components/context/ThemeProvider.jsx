import { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("theme-light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "theme-light" ? "theme-dark" : "theme-light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
     <div className={`app ${theme}`}>
       {children}
     </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
