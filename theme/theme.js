import React, { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";
import { ThemeProvider, CssBaseline } from "@mui/material";
import colors from "./colors";

const { blue, peach } = colors;

const ThemeSwitchContext = createContext({ toggleTheme: () => {} });
const themeConfig = (mode = "dark") => {
  return {
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: peach[200],
              dark: "#563999",
              contrastText: "rgb(200,0,0)",
            },
            secondary: { main: peach[600] },
            text: { primary: peach[200] },
            background: {
              default: blue[800],
              light: blue[500],
              dark: blue[900],
            },
          }
        : {
            primary: { main: blue[700], light: blue[500], dark: blue[800] },
            secondary: { main: blue[400],light:peach[600],dark:peach[700] },
            text: { primary: blue[700], secondary: blue[600] },
            background: {
              default: peach[100],
              light: peach[200],
              dark: peach[400],
            },
          }),
    },
  };
};

export const ThemeSwitchProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  const theme = createTheme(useMemo(() => themeConfig(mode), [mode]));

  const toggle = React.useMemo(() => ({
    toggleTheme: () => setMode((prev) => (prev === "light" ? "dark" : "light")),
  }));

  return (
    <ThemeSwitchContext.Provider value={{ appTheme: toggle }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeSwitchContext.Provider>
  );
};
export const useThemeSwitch = () => React.useContext(ThemeSwitchContext);
