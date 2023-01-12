import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";

type ThemeProp = {
  children: JSX.Element;
};

export enum themePalette {
  BG = "#FFFFFF",
  LINEN = "#efe5dc",
  CHAMPAGNE = "#f3d8c7",
  BEAU_BLUE = "#CDE3F7",
  CERULEAN = "#4059ad",
  ALICE_BLUE = "#e9f0f7",
  FONT_CURS = "'Handlee'",
  FONT_GLOBAL = "'Rubik'",
}

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: themePalette.BG,
    },
  },
  typography: {
    fontFamily: themePalette.FONT_GLOBAL,
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: "none",
          borderRadius: "0.5em",
        },
      },
    },
  },
});

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
