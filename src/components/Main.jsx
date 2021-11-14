import Grid from "@mui/material/Grid";

import AddSong from "./songs/AddSong";
import SongList from "./songs/SongList";
import SongPlayer from "./songs/SongPlayer";

const Main = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={7}>
        <AddSong />
        <SongList />
      </Grid>

      <Grid item xs={12} md={5}>
        <SongPlayer />
      </Grid>
    </Grid>
  );
};

export default Main;
