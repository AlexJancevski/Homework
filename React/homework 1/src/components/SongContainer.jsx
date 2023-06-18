import React from 'react';
import Song from './Song';
import Playlist from './Playlist';

export default class SongContainer extends React.Component {

    state = {
        songs: [
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
        ],
        playlist: []
    };

    addToPlaylist = (song) => {
        const { songs, playlist } = this.state;
        const updatedSongs = songs.map(s => {
            if (s.id === song.id) {
                return { ...s, isAddedToPlaylist: true };
            }
            return s;
        });
        const updatedPlaylist = [...playlist, song];
        this.setState({
            songs: updatedSongs,
            playlist: updatedPlaylist
        });
    }

    removeSong = (songId) => {
        const { songs, playlist } = this.state;
        const updatedSongs = songs.map(s => {
            if (s.id === songId) {
                return { ...s, isAddedToPlaylist: false };
            }
            return s;
        });
        const updatedPlaylist = playlist.filter(song => song.id !== songId);
        this.setState({
            songs: updatedSongs,
            playlist: updatedPlaylist
        });
    }

    calculateTotalDuration = () => {
        const { playlist } = this.state;
        return playlist.reduce((total, song) => total + song.duration, 0);
    }

    render() {
        const { songs, playlist } = this.state;
        const totalDuration = this.calculateTotalDuration();

        return (
            <>
                <div className='song-container'>
                    <h2 className='title'>Songs</h2>
                    {songs.map(song => (
                        <Song key={song.id} song={song} addToPlaylist={this.addToPlaylist} />
                    ))}
                </div>
                <div className='playlist-container'>
                    <Playlist songs={playlist} totalDuration={totalDuration} removeSong={this.removeSong} />
                </div>
            </>
        );
    }
}

