import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ReactPlayer from "react-player/youtube";
import QueuedSongList from "./QueuedSongList";
import SkipPreviousIcon from "../icons/SkipPreviousIcon";
import SkipNextIcon from "../icons/SkipNextIcon";
import PlayIcon from "../icons/PlayIcon";
import PauseIcon from "../icons/PauseIcon";
import TinyText from "../utils/TinyText";
import formatDuration from "../../lib/time/formatDuration";
import { useSongPlaying } from "../../contexts/SongPlayingContext";
import { useMemo, useRef, useState } from "react";

const SongPlayer = () => {
  const reactPlayerRef = useRef(null);
  const { song, isPlaying, toggleIsPlaying } = useSongPlaying();

  const [playedPosition, setPlayedPosition] = useState(0);

  const onPlayButtonClick = () => {
    toggleIsPlaying();
  };

  const onSliderChange = (event) => {
    setPlayedPosition(event.target.value);
    reactPlayerRef.current.seekTo(event.target.value, "seconds");
  };

  const onReactPlayerProgress = (event) => {
    setPlayedPosition(Math.round(event.playedSeconds));
  };

  const renderedPlayIcon = useMemo(() => {
    return isPlaying ? (
      <PauseIcon fontSize="mediun" />
    ) : (
      <PlayIcon fontSize="medium" />
    );
  }, [isPlaying]);

  return (
    <Stack>
      <Card variant="outlined">
        <Grid container>
          <Grid item xs={12} md={6}>
            <Stack>
              <CardHeader
                sx={{
                  p: (theme) => theme.spacing(2, 1, 1, 2),
                }}
                title={song.title}
                subheader={song.artist}
                titleTypographyProps={{
                  variant: "h6",
                  component: "h3",
                }}
              />

              <CardActions
                sx={{
                  alignItems: "stretch",
                  flexDirection: "column",
                  p: (theme) => theme.spacing(1, 1, 2, 2),
                }}
              >
                <Stack
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="center"
                >
                  <IconButton size="small">
                    <SkipPreviousIcon />
                  </IconButton>

                  <IconButton
                    color="secondary"
                    sx={{ border: 1, borderColor: "inherit", mr: 1, ml: 1 }}
                    size="small"
                    onClick={onPlayButtonClick}
                  >
                    {renderedPlayIcon}
                  </IconButton>

                  <IconButton size="small">
                    <SkipNextIcon />
                  </IconButton>
                </Stack>

                <Slider
                  onChange={onSliderChange}
                  color="secondary"
                  aria-label="time-indicator"
                  size="small"
                  value={playedPosition}
                  min={0}
                  step={1}
                  max={song.duration}
                />

                <Stack justifyContent="space-between" direction="row">
                  <TinyText>{formatDuration(playedPosition)}</TinyText>
                  <TinyText>
                    {formatDuration(song.duration - playedPosition)}
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
      <ReactPlayer
        ref={reactPlayerRef}
        onProgress={onReactPlayerProgress}
        url={song.url}
        playing={isPlaying}
        hidden
      />
      <QueuedSongList />
    </Stack>
  );
};

export default SongPlayer;
