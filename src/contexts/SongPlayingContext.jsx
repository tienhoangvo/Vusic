import { createContext, useContext, useState } from "react";

const SongPlayingContext = createContext();

export const useSongPlaying = () => {
  const context = useContext(SongPlayingContext);

  if (context === undefined)
    throw new Error("useSongPlaying must be used within SongPlayingProvider!");

  return context;
};

export const SongPlayingProvider = ({ children }) => {
  const [song, setSong] = useState({
    id: "e8222193-48c6-449a-b65a-75f96e023fb4",
    title: "Joshua Bassett - Feel Something (Official Music Video)",
    artist: "Joshua Bassett",
    url: "https://youtu.be/YU_TpcGdSIM",
    thumbnail: "https://i.ytimg.com/vi/YU_TpcGdSIM/maxresdefault.jpg",
    duration: 164,
    createdAt: "2021-11-14T12:51:39.399105+00:00",
  });

  const [isPlaying, setIsPlaying] = useState(false);

  const toggleIsPlaying = () => {
    setIsPlaying((isPlaying) => !isPlaying);
  };

  const onSongPlay = () => {
    setIsPlaying(true);
  };

  const onSongPause = () => {
    setIsPlaying(false);
  };

  const onSongSwitch = (newSong) => {
    if (newSong.id !== song.id) {
      setSong(newSong);
      setIsPlaying(true);

      return;
    }

    toggleIsPlaying();
  };

  return (
    <SongPlayingContext.Provider
      value={{
        song,
        isPlaying,
        toggleIsPlaying,
        onSongPlay,
        onSongPause,
        onSongSwitch,
      }}
    >
      {children}
    </SongPlayingContext.Provider>
  );
};
