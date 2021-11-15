import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Header from "./Header";
import Main from "./Main";
import { SongPlayingProvider } from "../contexts/SongPlayingContext";

const App = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 3 }}>
        <Toolbar />
        <SongPlayingProvider>
          <Main />
        </SongPlayingProvider>
      </Container>
    </Box>
  );
};

export default App;
