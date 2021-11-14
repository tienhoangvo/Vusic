import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

import QueuedSongList from "./QueuedSongList";
import SkipPreviousIcon from "../icons/SkipPreviousIcon";
import SkipNextIcon from "../icons/SkipNextIcon";
import PlayIcon from "../icons/PlayIcon";
import TinyText from "../utils/TinyText";
import formatDuration from "../../lib/time/formatDuration";

const SongPlayer = () => {
  const song = {
    title: "Love In The Dark",
    artist: "Leroy Sanchez",
    thumbnail: "https://i.ytimg.com/vi/mukT7PnJE1Q/maxresdefault.jpg",
    duration: 284, //seconds
  };

  const position = 32;

  return (
    <Stack>
      <Card variant="outlined">
        <Grid container>
          <Grid item xs={12} md={6}>
            <Stack>
              <CardHeader
                sx={{ p: (theme) => theme.spacing(2, 1, 1, 2) }}
                title={song.title}
                subheader={song.artist}
              />

              <CardActions
                sx={{
                  alignItems: "stretch",
                  flexDirection: "column",
                  p: (theme) => theme.spacing(1, 1, 2, 2),
                }}
              >
                <Stack flexDirection="row">
                  <IconButton size="small">
                    <SkipPreviousIcon />
                  </IconButton>

                  <IconButton size="small">
                    <PlayIcon fontSize="medium" />
                  </IconButton>

                  <IconButton size="small">
                    <SkipNextIcon />
                  </IconButton>
                </Stack>

                <Slider
                  color="secondary"
                  aria-label="time-indicator"
                  size="small"
                  value={position}
                  min={0}
                  step={1}
                  max={song.duration}
                />

                <Stack justifyContent="space-between" direction="row">
                  <TinyText>{formatDuration(position)}</TinyText>
                  <TinyText>
                    {formatDuration(song.duration - position)}
                  </TinyText>
                </Stack>
              </CardActions>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardMedia
              sx={{ height: "100%", paddingTop: "50%" }}
              image={song.thumbnail}
              title={song.title}
            />
          </Grid>
        </Grid>
      </Card>

      <QueuedSongList />
    </Stack>
  );
};

export default SongPlayer;
