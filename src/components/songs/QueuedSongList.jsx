import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";

import useQueuedSongs from "../../hooks/useQueuedSongs";

import QueuedSongListItem from "./QueuedSongListItem";

const QueuedSongList = () => {
  const { queuedSongs } = useQueuedSongs();

  const renderedItems = queuedSongs.map((song, index) => (
    <QueuedSongListItem song={song} key={index} />
  ));
  return (
    <List
      subheader={<ListSubheader>Queue ({queuedSongs.length})</ListSubheader>}
    >
      {renderedItems}
    </List>
  );
};

export default QueuedSongList;
