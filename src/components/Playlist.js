// src/components/Playlist.js
import React, { useEffect, useState } from 'react';
import './Playlist.css'; // Import the CSS file for styling
import { getRecommendations } from '../spotifyService';

const Playlist = ({ mood, language }) => {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        fetchRecommendations(); // Fetch recommendations initially
    }, [mood, language]);

    const fetchRecommendations = () => {
        if (mood && language) {
            getRecommendations(mood, language).then((data) => setTracks(data));
        }
    };

    const handleRefresh = () => {
        fetchRecommendations(); // Refresh recommendations
    };

    return (
        <div className="playlist-container">
            <h2 className="playlist-title">Recommended Tracks for "{mood}" Mood</h2>
            <button onClick={handleRefresh} className="refresh-button">Refresh Songs</button>
            <div className="track-list">
                {tracks.map(track => (
                    <div key={track.id} className="track-card">
                        <a href={track.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="track-link">
                            <img src={track.image} alt={track.name} className="track-image" />
                            <div className="track-info">
                                <p className="track-name">{track.name}</p>
                                <p className="track-artist">by {track.artists}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Playlist;
