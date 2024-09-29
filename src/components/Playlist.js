import React, { useEffect, useState } from 'react';
import { getRecommendations } from '../spotifyService';

const Playlist = ({ mood, language }) => {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        if (mood && language) {
            getRecommendations(mood, language).then((data) => setTracks(data));
        }
    }, [mood, language]);

    return (
        <div>
            <h2>Recommended Tracks for {mood}</h2>
            <ul>
                {tracks.map(track => (
                    <li key={track.id}>
                        <a href={track.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                            {track.name} by {track.artists}
                        </a>
                        <img src={track.image} alt={track.name} width="100" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Playlist;
