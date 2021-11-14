import LoadingSpinner from "../utils/LoadingSpinner";
import SongListItem from "./SongListItem";
import Stack from "@mui/material/Stack";
import { useSubscription } from "@apollo/client";
import { WATCH_SONGS } from "../../lib/graphql/subscriptions";
import { useMemo } from "react";
const SongList = () => {
  const { data, loading, error } = useSubscription(WATCH_SONGS);

  console.log(data, loading, error);

  const songs = useMemo(() => {
    if (!data) return [];

    return data.songs;
  }, [data]);
  if (loading) return <LoadingSpinner />;
  return (
    <Stack sx={{ mt: 2 }}>
      {songs.map((song) => (
        <SongListItem key={song.id} song={song} />
      ))}
    </Stack>
  );
};

export default SongList;
