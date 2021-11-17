import CardMedia from "@mui/material/CardMedia";

import TextField from "@mui/material/TextField";
import AddSongPreviewDialog from "./AddSongPreviewDialog";
import Button from "@mui/lab/LoadingButton";
import AddIcon from "../icons/AddIcon";
import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_SONG } from "../../lib/graphql/mutations";

const AddSongButton = ({ song, status }) => {
  const [addSong] = useMutation(ADD_SONG);
  const [openAddSongPreviewDialog, setOpenAddSongPreviewDialog] =
    useState(false);

  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState(0.0);
  const [artist, setArtist] = useState("");
  const [url, setUrl] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const onAddButtonClick = () => {
    setOpenAddSongPreviewDialog(true);
  };

  const onAddSongPreviewDialogClose = () => {
    setOpenAddSongPreviewDialog(false);
  };

  useEffect(() => {
    if (!song) return;

    setTitle(song.title);
    setUrl(song.url);
    setArtist(song.artist);
    setThumbnail(song.thumbnail);
    setDuration(song.duration);
  }, [song]);

  const onAddSong = () => {
    return addSong({
      variables: { title, artist, thumbnail, url, duration },
    });
  };

  return (
    <>
      <AddSongPreviewDialog
        open={openAddSongPreviewDialog}
        onClose={onAddSongPreviewDialogClose}
        onAddSong={onAddSong}
      >
        <CardMedia image={thumbnail} component="img" sx={{ mb: 0.5 }} />

        <TextField
          variant="filled"
          label="Title"
          name="title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          fullWidth
          margin="dense"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          variant="filled"
          label="Artist"
          name="artist"
          value={artist}
          onChange={(event) => {
            setArtist(event.target.value);
          }}
          fullWidth
          margin="dense"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          variant="filled"
          label="Thumbnail"
          name="thumbnail"
          value={thumbnail}
          onChange={(event) => {
            setThumbnail(event.target.value);
          }}
          fullWidth
          margin="dense"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </AddSongPreviewDialog>

      <Button
        sx={{ height: "100%", width: "100%" }}
        size="small"
        disabled={status === "idle"}
        loading={status === "loading"}
        disableElevation
        variant="contained"
        endIcon={<AddIcon />}
        onClick={onAddButtonClick}
      >
        Add
      </Button>
    </>
  );
};

export default AddSongButton;
