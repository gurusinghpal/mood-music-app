import axios from 'axios';

const clientId = 'bba18fdc0cdb4982ad124b9a08850f82'; // Replace with your actual Client ID
const clientSecret = '420152079f6b4083b6f673fc59a2423b'; // Replace with your actual Client Secret

// Function to get access token from Spotify API
const getAccessToken = async () => {
  const tokenUrl = 'https://accounts.spotify.com/api/token';
  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}`
  };

  try {
    const response = await axios.post(tokenUrl, params, { headers });
    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching access token', error);
    return null;
  }
};

// Separate seed genres for Hindi and English
const seedGenresHindi = {
  happy: 'indian, happy',
  sad: 'indian, heartbroken',
  relaxed: 'indian, romance',
  energetic: 'indian, party'
};

const seedGenresEnglish = {
  happy: 'happy',
  sad: 'sad',
  relaxed: 'chill',
  energetic: 'party'
};

// Function to get song recommendations from Spotify API based on mood and language
const getRecommendations = async (mood, language) => {
  const accessToken = await getAccessToken();
  if (!accessToken) return [];

  const recommendationsUrl = 'https://api.spotify.com/v1/recommendations';

  // Add support for language mapping to a specific market (region)
  const marketMapping = {
    en: 'US',  // English songs popular in the US
    hi: 'IN'   // Hindi songs popular in India
  };

  // Get seed genres based on language
  const seedGenres = language === 'hi' ? seedGenresHindi : seedGenresEnglish;
  const seedGenre = seedGenres[mood] || 'pop'; // Default to 'pop' if mood is not recognized
  const market = marketMapping[language] || 'US'; // Default to 'US' if language is not recognized

  try {
    const response = await axios.get(recommendationsUrl, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      },
      params: {
        seed_genres: seedGenre,
        market: market,   // Spotify market parameter to filter by region/language
        limit: 10
      }
    });

    return response.data.tracks.map(track => ({
      id: track.id,
      name: track.name,
      artists: track.artists.map(artist => artist.name).join(', '),
      external_urls: track.external_urls,
      image: track.album.images[0]?.url || 'https://via.placeholder.com/100' // Fallback image
    }));
  } catch (error) {
    console.error('Error fetching recommendations', error);
    return [];
  }
};

export { getRecommendations };
