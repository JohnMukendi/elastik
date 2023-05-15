import colors from "./colors";
const { blue, peach, red, orange, yellow, indigo ,green} = colors;
export const darkPalette = {
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
      extraLight:blue[500]
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
        primary : green[500],
        light:green[400],
        xtraLight : green[200],
        dark:green[700]
      },
    },
    alternative: {
      first: orange[300],
    },
  }