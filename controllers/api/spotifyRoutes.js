const router = require('express').Router();
const spotifyApi = require('../utils/spotify.js');


router.post('/login', (req, res) => {

  const scopes = ['user-read-private', 'user-read-email'];
  const authorizeURL = spotifyApi.createAuthorizeURL(scopes);

  console.log(authorizeURL);

  res.redirect(authorizeURL);

})

router.get('/callback', (req, res) => {

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