// src/spotifyService.js
import axios from 'axios';

const clientId = 'bba18fdc0cdb4982ad124b9a08850f82'; // Replace with your actual Client ID
const clientSecret = '420152079f6b4083b6f673fc59a2423b'; // Replace with your actual Client Secret
const redirectUri = 'http://localhost:3000/callback'; // Replace with your actual Redirect URI

// Function to exchange authorization code for access token
const exchangeCodeForToken = async (code) => {
  const url = 'https://accounts.spotify.com/api/token';

  const body = new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirectUri,  // Ensure this is correctly set
      client_id: clientId,
      client_secret: clientSecret
  }).toString();

  try {
      const response = await axios.post(url, body, {
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
          },
      });
      return response.data; // Return the token data
  } catch (error) {
      console.error('Error exchanging code for token:', error.response?.data || error.message);
      throw error; // Propagate error for further handling
  }
};

// Function to get song recommendations from Spotify API based on mood
const getRecommendations = async (mood, accessToken) => {
    if (!accessToken) return [];

    const recommendationsUrl = 'https://api.spotify.com/v1/recommendations';
    const seedGenres = {
        happy: 'happy',
        sad: 'sad',
        relaxed: 'chill',
        energetic: 'party'
    };

    try {
        const response = await axios.get(recommendationsUrl, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            params: {
                seed_genres: seedGenres[mood],
                limit: 10
            }
        });

        return response.data.tracks.map(track => ({
            id: track.id,
            name: track.name,
            artists: track.artists.map(artist => artist.name).join(', '),
            external_urls: track.external_urls,
            image: track.album.images[0]?.url || 'https://via.placeholder.com/100',
            uri: track.uri
        }));
    } catch (error) {
        console.error('Error fetching recommendations', error);
        return [];
    }
};

export { getRecommendations, exchangeCodeForToken };