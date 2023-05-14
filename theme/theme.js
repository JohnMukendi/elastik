import React, { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";
import { ThemeProvider, CssBaseline } from "@mui/material";
import colors from "./colors";

const { blue, peach, red, orange, yellow,indigo } = colors;

const ThemeSwitchContext = createContext({ toggleTheme: () => {} });
const themeConfig = (mode = "dark") => {
  return {
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: peach[200],
              dark: peach[800],
              contrastText: "rgb(200,0,0)",
            },
            secondary: { main: orange[300] },
            text: { primary: peach[200], unselected: blue[100] },
            background: {
              default: blue[800],
              light: blue[500],
              dark: blue[400],
            },
            custom: {
              lowLevel: {
                primary: red[400],
                light: red[300],
                xtraLight: red[200],
                dark: red[700],
              },
              mediumLevel: {
                primary: orange[600],
                light: orange[300],
                xtraLight: orange[100],
                dark: orange[700],
              },
              fullLevel : {
                primary : indigo[400],
                light:indigo[300],
                xtraLight : indigo[100],
                dark:indigo[600]
              },
            },
            alternative: {
              first: orange[300],
            },
          }
        : {
            primary: { main: blue[700], light: blue[800], dark: blue[200] },
            secondary: { main: blue[400], light: peach[600], dark: peach[700] },
            text: {
              primary: blue[700],
              secondary: peach[100],
              unselected: "#222",
            },
            background: {
              default: peach[100],
              light: peach[200],
              dark: peach[300],
              extraLight: peach[100],
            },
            custom: {
              lowLevel: {
                primary: red[400],
                light: red[200],
                xtraLight: red[100],
                dark: red[600],
              },
              mediumLevel: {
                primary: orange[600],
                light: orange[300],
                xtraLight: orange[100],
                dark: orange[700],
              },
              fullLevel : {
                primary : indigo[400],
                light:indigo[200],
                xtraLight : indigo[100],
                dark:indigo[600]
              }
            },
            alternative: {
              first: blue[500],
              second: orange[500],
            },
          }),
    },
    typography: {
      fontFamily: "Ubuntu",
      // fontFamily:["__myFont_e1a1c0","__myFont_Fallback_e1a1c0"].join(",")
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
