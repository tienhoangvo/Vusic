import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "../icons/DeleteIcon";

const QueuedSongListItem = ({ song }) => {
  return (
    <ListItem divider>
      <ListItemAvatar>
        <Avatar src={song.thumbnail} alt={song.title} variant="rounded" />
      </ListItemAvatar>

      <ListItemText primary={song.title} secondary={song.artist} />

      <ListItemSecondaryAction>
        <IconButton size="small">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default QueuedSongListItem;
