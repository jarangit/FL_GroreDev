"use client";

import { createTheme } from "@mui/material/styles";

const acceptButtonTheme = createTheme({
  palette: {
    primary: {
      main: "#EDD500",
    },
    secondary: {
      main: "#FFFFFF",
    },
    info: {
      main: "#606060",
    },


  },
  typography: {
    fontFamily: [
      '"Prompt"', " sans-serif"
    ].join(',')
  }
});

export { acceptButtonTheme }