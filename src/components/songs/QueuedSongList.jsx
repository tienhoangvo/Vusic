import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import QueuedSongListItem from "./QueuedSongListItem";

const QueuedSongList = () => {
  const song = {
    title: "Nerves",
    artist: "DPR IAN",
    thumbnail: "https://i.ytimg.com/vi/KlEbnOZ9DZQ/maxresdefault.jpg",
  };

  const songs = Array.from({ length: 10 }).map(() => song);

  const renderedItems = songs.map((song, index) => (
    <QueuedSongListItem song={song} key={index} />
  ));
  return (
    <List subheader={<ListSubheader>Queue (5)</ListSubheader>}>
      {renderedItems}
    </List>
  );
};

export default QueuedSongList;
