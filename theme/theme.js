import React, { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";
import { ThemeProvider, CssBaseline } from "@mui/material";
import colors from "./colors";
import { darkPalette } from "./dark-palette";
import { amber,indigo,red,lightBlue,green,orange,blue } from "@mui/material/colors";
const ThemeSwitchContext = createContext({ toggleTheme: () => {} });
const themeConfig = (mode = "dark") => {
  return {
    palette: {
      mode,
      ...(mode === "dark"
        ? darkPalette
        : {
            primary: { main: indigo[900], light: indigo[800], dark: indigo[200] },
            secondary: {
              main: indigo[700],
              light: indigo[600],
              dark: amber[700],
            },
            text: {
              primary: blue[900],
              secondary: amber[100],
              unselected: "#222",
            },
            background: {
              default: "#f5f5f5",
              light: "#fff",
              dark: indigo[300],
              extraLight: "#f5f5f5",
            },
            custom: {
              lowLevel: {
                primary: red[400],
                light: red[200],
                xtraLight: red[100],
                dark: red[600],
              },
              mediumLevel: {
                primary: amber[500],
                light: amber[300],
                xtraLight: amber[100],
                dark: amber[700],
              },
              fullLevel: {
                primary: green[400],
                light: green[200],
                xtraLight: green[100],
                dark: green[600],
              },
            },
            alternative: {
              first: indigo[500],
              second: orange[500],
            },
          }),
    },
    typography: {
      fontFamily: "Verdana",
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
