import colors from "./colors";
const { blue, peach, red, orange, yellow, indigo, green } = colors;
export const darkPalette = {
  primary: {
    main: "#eee",
    dark: indigo[800],
    contrastText: "rgb(200,0,0)",
  },
  secondary: { main: blue[300] },
  text: { primary: "#eee", unselected: blue[100] },
  background: {
    default: blue[800],
    light: blue[500],
    dark: blue[400],
    extraLight: blue[500],
    contrast: blue[600],
  },
  custom: {
    lowLevel: {
      primary: red[400],
      light: red[300],
      xtraLight: red[200],
      dark: red[700],
    },
    mediumLevel: {
      primary: orange[500],
      light: orange[300],
      xtraLight: orange[100],
      dark: orange[700],
    },
    fullLevel: {
      primary: green[600],
      light: green[400],
      xtraLight: green[200],
      dark: green[700],
    },
    total: {
      primary: blue[100],
      light: blue[200],
      xtraLight: blue[400],
      dark: blue[500],
    },
  },
  alternative: {
    first: blue[300],
    border:blue[500]
  },
};
