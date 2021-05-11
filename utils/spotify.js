const SpotifyWebApi = require('spotify-web-api-node');

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUri = process.env.REDIRECT_URI || 'http://localhost:8080/callback/';

// credentials are optional
const spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret,
  redirectUri: redirectUri
});

module.exports = spotifyApi;