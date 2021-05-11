const SpotifyWebApi = require('spotify-web-api-node');

const clientId = '5fad7261e6a643669234205c08cc5547';
const clientSecret = '234bb2ad45224f92b11d7c3d4500acf3';
const redirectUri = 'http://localhost:8080/callback/';

// credentials are optional
const spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret,
  redirectUri: redirectUri
});

module.exports = spotifyApi;