const router = require('express').Router();
const axios = require("axios");
const spotifyApi = require("../../utils/spotify.js")
const Artists = require('../../models/artists.js');


const getId = name => axios.get(`https://api.spotify.com/v1/search?q=${name}&type=artist`, {
    headers: {
      Accept: 'application/json, text/plain, */*',
      Authorization: "Bearer " + spotifyApi.getAccessToken()
    }
  })
    .then(data => data.data.artists.items[0].id)
    .catch(error => console.error(error))

router.get('/randomize-playlist', async (req, res) => {
  
  const artistData = await Artists.findAll()

  const artists = [];
  const topArtists = artistData.map(artist => artist.get({ plain: true }))

  topArtists
    .splice(topArtists.length - 5, topArtists.length)
    .forEach(artist => artists.push({ name: artist.artist_name }))

  const getIds = async () => Promise.all(artists.map(async artist => await getId(artist.name)));

  spotifyApi.getRecommendations({
    min_energy: 0.4,
    seed_artists: await getIds(),
    min_popularity: 50
  })
    .then(data => { 
      console.log("Tracks: ", data.body.tracks, "Seeds: ", data.body.seeds)
      res.json({ 
        data: { 
          tracks: data.body.tracks, 
          seeds: data.body.seeds
        }
      })
    })
    .catch(error => console.error("Something went wrong!", error))

})

module.exports = router;