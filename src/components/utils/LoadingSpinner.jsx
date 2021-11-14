import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingSpinner = () => {
  return (
    <Stack
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ mt: 2 }}
    >
      <CircularProgress size={24} color="inherit" />
    </Stack>
  );
};

export default LoadingSpinner;
