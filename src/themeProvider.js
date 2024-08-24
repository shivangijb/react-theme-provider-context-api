import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode((prevMode) => !prevMode);

  console.log("darkMode", isDarkMode);

  useEffect(() => {
    const appComponent = document.querySelector(".App");
    if (isDarkMode) {
      appComponent.classList.add("dark");
    } else {
      appComponent.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
