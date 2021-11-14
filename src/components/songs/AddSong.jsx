import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import LinkIcon from "../icons/LinkIcon";
import AddSongButton from "./AddSongButton";
import ReactPlayer from "react-player/youtube";
import { useEffect, useState } from "react";

const AddSong = () => {
  const [url, setUrl] = useState("");
  const [song, setSong] = useState(null);
  const [status, setStatus] = useState("idle");
  const onReactPlayerReady = ({ player }) => {
    const shortURL = player.player.props.url;

    const nestedPlayer = player.player.player;

    const data = getYouTubeInfo(nestedPlayer);

    const songData = { url: shortURL, ...data };

    setSong(songData);
    setStatus("ready");
  };

  const getYouTubeInfo = (player) => {
    const duration = player.getDuration();

    const { title, video_id, author: artist } = player.getVideoData();

    const thumbnail = `https://i.ytimg.com/vi/${video_id}/maxresdefault.jpg`;

    return {
      duration,
      title,
      artist,
      thumbnail,
    };
  };

  useEffect(() => {
    if (!url) {
      setStatus("idle");
      return;
    }

    setStatus("loading");
  }, [url]);
  return (
    <Grid container columnSpacing={2}>
      <Grid item xs={10}>
        <TextField
          value={url}
          onChange={(event) => {
            setUrl(event.target.value);
          }}
          type="url"
          size="small"
          fullWidth
          placeholder={"Paste YouTube or Soundcloud URL here"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LinkIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>

      <Grid item xs={2} sx={{ alignSelf: "center" }}>
        <AddSongButton song={song} status={status} />
      </Grid>

      <ReactPlayer url={url} onReady={onReactPlayerReady} hidden />
    </Grid>
  );
};

export default AddSong;
