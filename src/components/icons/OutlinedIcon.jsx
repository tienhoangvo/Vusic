import Icon from "@mui/material/Icon";

const OutlinedIcon = ({
  children,
  fontSize = "small",
  color = "inherit",
  ...rest
}) => {
  return (
    <Icon
      baseClassName="material-icons-outlined"
      fontSize={fontSize}
      color={color}
      {...rest}
    >
      {children}
    </Icon>
  );
};

export default OutlinedIcon;
