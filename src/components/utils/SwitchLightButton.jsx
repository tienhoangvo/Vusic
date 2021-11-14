import { Button } from "@mui/material";
import { useMuiApp } from "../../contexts/MuiAppContext";

const SwitchLightButton = () => {
  const { paletteMode, togglePaletteMode } = useMuiApp();
  return (
    <Button variant="contained" onClick={togglePaletteMode}>
      Turn on the light
    </Button>
  );
};

export default SwitchLightButton;
