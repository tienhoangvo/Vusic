import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "../icons/DeleteIcon";
import useQueuedSongs from "../../hooks/useQueuedSongs";

const QueuedSongListItem = ({ song }) => {
  const { addOrRemoveSongFromQueue } = useQueuedSongs();

  const onDeleteButtonClick = () => {
    addOrRemoveSongFromQueue(song);
  };
  return (
    <ListItem divider>
      <ListItemAvatar>
        <Avatar src={song.thumbnail} alt={song.title} variant="rounded" />
      </ListItemAvatar>

      <ListItemText primary={song.title} secondary={song.artist} />

      <ListItemSecondaryAction>
        <IconButton size="small" onClick={onDeleteButtonClick}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default QueuedSongListItem;
