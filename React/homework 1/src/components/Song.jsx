import React from 'react';
import PropTypes from 'prop-types';

export default class Song extends React.Component {
  addToPlaylist = () => {
    this.props.addToPlaylist(this.props.song);
  }

  render() {
    const { title, artistName, duration, isAddedToPlaylist } = this.props.song;

    return (
      <div className='song-details'>
        <p>Title: {title}</p>
        <p>Artist: {artistName}</p>
        <p>Duration: {duration} seconds</p>
        <button onClick={this.addToPlaylist} disabled={isAddedToPlaylist} className="song-button">
          {isAddedToPlaylist ? 'Added' : 'Add to Playlist'}
        </button>
      </div>
    );
  }
}

Song.propTypes = {
  song: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    isAddedToPlaylist: PropTypes.bool.isRequired
  }).isRequired,
  addToPlaylist: PropTypes.func.isRequired
};