import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Header from "./Header";
import Main from "./Main";

const App = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 3 }}>
        <Toolbar />

        <Main />
      </Container>
    </Box>
  );
};

export default App;
