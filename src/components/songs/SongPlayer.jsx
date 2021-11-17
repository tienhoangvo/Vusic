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
import { useCallback, useMemo, useRef, useState } from "react";
import useQueuedSongs from "../../hooks/useQueuedSongs";

const SongPlayer = () => {
  const reactPlayerRef = useRef(null);
  const { song, isPlaying, toggleIsPlaying, onSongSwitch, onSongPause } =
    useSongPlaying();

  const [playedPosition, setPlayedPosition] = useState(0);

  const { queuedSongs } = useQueuedSongs();

  const nextSong = useMemo(() => {
    if (!song) return null;

    if (!queuedSongs) return null;

    if (!queuedSongs.length) return null;

    const songIndex = queuedSongs.findIndex((s) => s.id === song.id);

    if (songIndex === -1) {
      //the current song is not in the queue then play the first one;
      return queuedSongs[0];
    }

    if (songIndex === queuedSongs.length - 1) {
      // the current playing song is the last song of the queue then replay the first one!
      return queuedSongs[0];
    }

    return queuedSongs[songIndex + 1];
  }, [queuedSongs, song]);

  const previousSong = useMemo(() => {
    if (!song) return null;

    if (!queuedSongs) return null;

    if (!queuedSongs.length) return null;

    const songIndex = queuedSongs.findIndex((s) => s.id === song.id);

    if (songIndex === -1) {
      //the current song is not in the queue then play the first one;
      return queuedSongs[queuedSongs.length - 1];
    }

    if (songIndex === 0) {
      // the current playing song is the last song of the queue then replay the first one!
      return queuedSongs[queuedSongs.length - 1];
    }

    return queuedSongs[songIndex - 1];
  }, [queuedSongs, song]);

  const onNextSongClick = useCallback(() => {
    if (!nextSong) return;

    onSongSwitch(nextSong);
  }, [nextSong]);

  const onPreviousSongClick = useCallback(() => {
    if (!previousSong) return;

    onSongSwitch(previousSong);
  }, [previousSong]);

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

  const onReactPlayerPause = useCallback(() => {
    if (!isPlaying) return;

    onSongPause();
  }, [isPlaying]);

  const onReactPlayerEnded = () => {
    onSongSwitch(nextSong);
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
                  <IconButton size="small" onClick={onPreviousSongClick}>
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

                  <IconButton size="small" onClick={onNextSongClick}>
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
        onEnded={onReactPlayerEnded}
        onPause={onReactPlayerPause}
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
