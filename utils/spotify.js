const SpotifyWebApi = require('spotify-web-api-node');
require('dotenv').config();


const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: 'http://localhost:8080/api/spotify/callback/'
});

module.exports = spotifyApi;