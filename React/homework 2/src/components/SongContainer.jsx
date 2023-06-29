import React, { useState } from 'react';
import Song from './Song';
import Playlist from './Playlist';

const SongContainer = () => {
  const [songs, setSongs] = useState([
    {
      id: 1,
      title: 'Fairytail',
      artistName: 'Alexander Rybak',
      duration: 183
    },
    {
      id: 2,
      title: 'Dori Me',
      artistName: 'Deborah de Luca',
      duration: 387
    },
    {
      id: 3,
      title: 'Pump It Up',
      artistName: 'Endor',
      duration: 150
    },
    {
      id: 4,
      title: 'Let Me Down Slowly',
      artistName: 'Alec Benjamin',
      duration: 169
    },
    {
      id: 5,
      title: 'Summer',
      artistName: 'Calvin Harris',
      duration: 223
    },
    {
      id: 6,
      title: 'First Class',
      artistName: 'Jack Harllow',
      duration: 174
    },
  ]);

  const [playlist, setPlaylist] = useState([]);

  const addToPlaylist = (song) => {
    setPlaylist([...playlist, song]);
  };

  const removeFromPlaylist = (songId) => {
    setPlaylist(playlist.filter((song) => song.id !== songId));
  };

  return (
    <div>
      <h1>Song List</h1>
      {songs.map((song) => (
        <Song
          key={song.id}
          song={song}
          onAddToPlaylist={() => addToPlaylist(song)}
          disabled={playlist.some((item) => item.id === song.id)}
        />
      ))}
      <Playlist playlist={playlist} onRemoveFromPlaylist={removeFromPlaylist} />
    </div>
  );
};

export default SongContainer;