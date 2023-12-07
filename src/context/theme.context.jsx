import { createContext, useState } from "react";

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {    // <== ADD
        if (theme === "light") {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }