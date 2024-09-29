const SPOTIFY_CLIENT_ID = 'your_client_id'; // Your Spotify client ID
const REDIRECT_URI = 'http://localhost:3000/callback'; // Your redirect URI
const SCOPES = 'user-read-private user-read-email'; // Adjust scopes as needed

const getAuthorizationUrl = () => {
    const baseUrl = 'https://accounts.spotify.com/authorize';
    const url = `${baseUrl}?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${encodeURIComponent(SCOPES)}&response_type=code`;
    window.location.href = url; // Redirect to Spotify's authorization page
};


export default getAuthorizationUrl;
