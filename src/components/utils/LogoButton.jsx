import Button from "@mui/material/Button";

import VusicIcon from "../icons/VusicIcon";
const LogoButton = () => {
  return (
    <Button disableRipple startIcon={<VusicIcon />}>
      Vusic
    </Button>
  );
};

export default LogoButton;
