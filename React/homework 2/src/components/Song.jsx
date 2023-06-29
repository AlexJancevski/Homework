import React from 'react';
import PropTypes from 'prop-types';

const Song = ({ song, onAddToPlaylist, disabled }) => {
  const { title, artistName, duration } = song;

  return (
    <div className='song'>
      <h3>{title}</h3>
      <p>{artistName}</p>
      <p>Duration: {duration} seconds</p>
      <button onClick={onAddToPlaylist} disabled={disabled}>
        Add to Playlist
      </button>
    </div>
  );
};

Song.propTypes = {
  song: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
  }).isRequired,
  onAddToPlaylist: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Song;