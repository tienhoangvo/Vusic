import { useMemo } from "react";
import useSWRImmutable from "swr/immutable";

import asyncLocalStorage from "../lib/asyncLocalStorage";

const fetcher = async (key) => {
  console.log("Revalidating");
  const queuedSongs = await asyncLocalStorage.getItem(key);

  if (!queuedSongs) {
    await asyncLocalStorage.setItem(key, "[]");

    return [];
  }

  return JSON.parse(queuedSongs);
};

const useQueuedSongs = () => {
  const { data, mutate } = useSWRImmutable("queuedSongs", fetcher);

  const queuedSongs = useMemo(() => {
    if (!data) return [];

    return data;
  }, [data]);

  const addOrRemoveSongFromQueue = (song) => {
    let newQueue = null;

    if (queuedSongs.some((s) => s.id === song.id)) {
      newQueue = queuedSongs.filter((s) => s.id !== song.id);
    } else {
      newQueue = [...data, song];
    }

    localStorage.setItem("queuedSongs", JSON.stringify(newQueue));
    mutate(newQueue, false);
  };
  return { queuedSongs, addOrRemoveSongFromQueue };
};

export default useQueuedSongs;
