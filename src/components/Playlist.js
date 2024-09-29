// src/components/Playlist.js
import React, { useEffect, useState } from 'react';
import { getRecommendations, exchangeCodeForToken } from '../spotifyService';

const Playlist = ({ mood }) => {
    const [tracks, setTracks] = useState([]);
    const [player, setPlayer] = useState(null);

    useEffect(() => {
        const initializePlayer = async () => {
            // Replace 'YOUR_AUTH_CODE' with the actual code you receive from Spotify after authorization
            const code = 'YOUR_AUTH_CODE'; // You need to implement the logic to get this from the URL
            const redirectUri = 'http://localhost:3000/callback'; // Your redirect URI

            const token = await exchangeCodeForToken(code, redirectUri); // Exchange code for access token
            if (!token) {
                console.error('Access token not available');
                return;
            }

            const newPlayer = new window.Spotify.Player({
                name: 'Web Playback SDK',
                getOAuthToken: cb => { cb(token); },
                volume: 0.5,
            });

            setPlayer(newPlayer);

            newPlayer.connect().then(success => {
                if (success) {
                    console.log('The Web Playback SDK successfully connected to Spotify!');
                } else {
                    console.error('Failed to connect to the Web Playback SDK');
                }
            });
        };

        initializePlayer(); // Call the initialize function

        return () => {
            if (player) {
                player.disconnect();
            }
        };
    }, [mood]);

    const playTrack = (trackUri) => {
        if (player) {
            player.resume().then(() => {
                player.play({
                    uris: [trackUri]
                });
            });
        } else {
            console.error('Player is not initialized');
        }
    };

    useEffect(() => {
        if (mood) {
            getRecommendations(mood).then((data) => setTracks(data));
        }
    }, [mood]);

    return (
        <div>
            <h2>Recommended Tracks for {mood}</h2>
            <ul>
                {tracks.map(track => (
                    <li key={track.id}>
                        <button onClick={() => playTrack(track.uri)}>
                            Play {track.name} by {track.artists.map(artist => artist.name).join(', ')}
                        </button>
                        <img src={track.image} alt={track.name} width={100} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Playlist;
