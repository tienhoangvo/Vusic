import Typography from "@mui/material/Typography";

const TinyText = ({ children }) => {
  return (
    <Typography
      sx={{
        fontSize: "0.75rem",
        opacity: 0.38,
        fontWeight: 500,
        letterSpacing: 0.2,
      }}
    >
      {children}
    </Typography>
  );
};

export default TinyText;
