import { createTheme } from "@mui/material/styles";

const baseThemeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#339af0",
      light: "#a5d8ff",
      dark: "#1971c2",
    },
    grey: {
      300: "e0e0e0",
      500: "9e9e9e",
      700: "616161",
    },
  },
};

let theme = createTheme(baseThemeOptions);
theme = createTheme(theme);

export default theme;
