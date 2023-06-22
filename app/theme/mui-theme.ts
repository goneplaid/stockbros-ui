import { ThemeProvider, createTheme } from "@mui/material";
import fonts from "./fonts";

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: fonts.primary.style.fontFamily,
    },
    h2: {
      fontFamily: fonts.subheading.style.fontFamily,
    },
    h3: {
      fontFamily: fonts.subheading.style.fontFamily,
    },
    h4: {
      fontFamily: fonts.subheading.style.fontFamily,
    },
    h5: {
      fontFamily: fonts.subheading.style.fontFamily,
    },
    h6: {
      fontFamily: fonts.subheading.style.fontFamily,
    },
    subtitle1: {
      fontFamily: fonts.subheading.style.fontFamily,
    },
    subtitle2: {
      fontFamily: fonts.subheading.style.fontFamily,
    },
    body1: {
      fontFamily: fonts.primary.style.fontFamily,
    },
    body2: {
      fontFamily: fonts.primary.style.fontFamily,
    },
    button: {
      fontFamily: fonts.primary.style.fontFamily,
    },
    caption: {
      fontFamily: fonts.primary.style.fontFamily,
    },
    overline: {
      fontFamily: fonts.primary.style.fontFamily,
    },
  },
});

export default theme;
