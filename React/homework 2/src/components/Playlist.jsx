import React from 'react';
import PropTypes from 'prop-types';

const Playlist = ({ playlist, onRemoveFromPlaylist }) => {
  const getTotalDuration = () => {
    let totalDuration = 0;
    playlist.forEach((song) => {
      totalDuration += song.duration;
    });
    return totalDuration;
  };

  return (
    <div className='playlist'>
      <h2>Playlist</h2>
      <p>Total Duration: {getTotalDuration()} seconds</p>
      {playlist.map((song) => (
        <div key={song.id} className="playlist-item">
          <h3>{song.title}</h3>
          <p>{song.artistName}</p>
          <p>Duration: {song.duration} seconds</p>
          <button onClick={() => onRemoveFromPlaylist(song.id)}>
            Remove from Playlist
          </button>
        </div>
      ))}
    </div>
  );
};

Playlist.propTypes = {
  playlist: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      artistName: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
    })
  ).isRequired,
  onRemoveFromPlaylist: PropTypes.func.isRequired,
};

export default Playlist;