import { createTheme } from "@mui/material";
import { darkPalette, lightPalette } from "./palletes";

const getTheme = (palletteMode = "light") => {
  return createTheme({
    palette: palletteMode === "light" ? lightPalette : darkPalette,

    typography: {
      fontFamily: "'Karla', sans-serif",
    },
  });
};

export default getTheme;
