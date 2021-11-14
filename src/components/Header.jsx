import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import LogoButton from "./utils/LogoButton";

const Header = () => {
  return (
    <AppBar
      color="inherit"
      elevation={0}
      sx={{ borderBottom: 2, borderColor: "divider" }}
    >
      <Toolbar>
        <LogoButton />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
