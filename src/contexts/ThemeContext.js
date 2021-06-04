import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    isLightTheme: false,
    light: {
      background: "white",
      color: "black",
    },
    dark: {
      background: "black",
      color: "white",
    },
  });

  //func toggle theme
  const toggleTheme = () => {
    setTheme({
      ...theme,
      isLightTheme: !theme.isLightTheme,
    });
  };

  // context data
  const themeContextData = {
    theme,
    toggleTheme,
  };

  // return provider
  return (
    <ThemeContext.Provider value={themeContextData}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
