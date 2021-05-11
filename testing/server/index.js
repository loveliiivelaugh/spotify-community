const express = require('express')
const SpotifyWebApi = require('spotify-web-api-node');
const path = require('path');
const cors = require('cors');

const app = express()
const port = 8080;


app.use(cors())
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const clientId = '5fad7261e6a643669234205c08cc5547';
const clientSecret = '234bb2ad45224f92b11d7c3d4500acf3';
const redirectUri = 'http://localhost:8080/callback/';

// credentials are optional
  const spotifyApi = new SpotifyWebApi({
    clientId: clientId,
    clientSecret: clientSecret,
    redirectUri: redirectUri
  });


app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/login', (req, res) => {} )

app.post('/login', (req, res) => {

  const scopes = ['user-read-private', 'user-read-email'];
  const authorizeURL = spotifyApi.createAuthorizeURL(scopes);

  console.log(authorizeURL);

  res.redirect(authorizeURL);

})


app.get('/callback', (req, res) => {

  // your application requests refresh and access tokens
  // after checking the state parameter
  const code = req.query.code || null;
  const state = req.query.state || null;
  // const storedState = req.cookies ? req.cookies[stateKey] : null;
  console.log(code)

  // Retrieve an access token and a refresh token
  spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      console.log('The token expires in ' + data.body['expires_in']);
      console.log('The access token is ' + data.body['access_token']);
      console.log('The refresh token is ' + data.body['refresh_token']);

      // Set the access token on the API object to use it in later calls
      spotifyApi.setAccessToken(data.body['access_token']);
      spotifyApi.setRefreshToken(data.body['refresh_token']);

      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in
      })

    })
    .catch(exception =>{ 
      console.error(exception)
      res.sendStatus(400)
    })
})

app.get('/api/tracks/:item', (req, res) => {
  const track = req.params.id ? req.params.id : 'Love';
  // Search tracks whose name, album or artist contains 'Love'
  spotifyApi
    .searchTracks(track)
    .then(data => console.log('Search by "Love"', data.body))
    .catch(exception => console.error(exception))
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})