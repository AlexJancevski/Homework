import React from 'react';
import PropTypes from 'prop-types';

export default class Playlist extends React.Component {
  removeSong = (songId) => {
    this.props.removeSong(songId);
  }

  render() {
    const { songs, totalDuration } = this.props;

    return (
      <div className='playlist-details'>
        <h2>Playlist</h2>
        <p>Total Duration: {totalDuration} seconds</p>
        {songs.map(song => (
          <div key={song.id} className="playlist-box">
            <p>Title: {song.title}</p>
            <p>Artist: {song.artistName}</p>
            <p>Duration: {song.duration} seconds</p>
            <button type='button' className='remove-button' onClick={() => this.removeSong(song.id)}>Remove from Playlist</button>
          </div>
        ))}
      </div>
    )
  }
};

Playlist.propTypes = {
  songs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      artistName: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired
    })
  ).isRequired,
  totalDuration: PropTypes.number.isRequired,
  removeSong: PropTypes.func.isRequired
};