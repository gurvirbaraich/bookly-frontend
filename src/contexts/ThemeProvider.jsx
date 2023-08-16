/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeProvider({ children }) {
  // Checking if the user uses dark theme for the system
  const usesDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

  // If user uses dark theme, then set dark theme else use light theme
  const [theme, setTheme] = useState(usesDarkTheme.matches ? "dark" : "light");

  useEffect(function () {
    // When system theme changes
    usesDarkTheme.addEventListener("change", (theme) => {
      // If user uses dark theme, then set dark theme else use light theme
      setTheme(theme.matches ? "dark" : "light");
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeContext.Provider value={{ mode: theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
