import { CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useContext, useMemo, useState } from "react";
import getTheme from "../mui/getTheme";

const MuiAppContext = createContext();

export const useMuiApp = () => {
  const context = useContext(MuiAppContext);

  if (context === undefined)
    throw new Error("useMuiApp must be used within MuiAppProvider");

  return context;
};

export const MuiAppProvider = ({ children }) => {
  const [paletteMode, setPaletteMode] = useState("dark");

  const togglePaletteMode = () => {
    setPaletteMode((mode) => (mode === "dark" ? "light" : "dark"));
  };

  const theme = useMemo(() => {
    return getTheme(paletteMode);
  }, [paletteMode]);

  return (
    <MuiAppContext.Provider value={{ paletteMode, togglePaletteMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </MuiAppContext.Provider>
  );
};
