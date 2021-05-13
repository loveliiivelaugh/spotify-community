const router = require('express').Router();
const axios = require("axios");
const spotifyApi = require("../../utils/spotify.js")
const Artists = require('../../models/artists.js');
let arr=[];
const getId = async (name) => {
  console.log(spotifyApi.getAccessToken(), name)
  axios.get(`https://api.spotify.com/v1/search?q=${name}&type=artist`, {
    headers: {
      Accept: 'application/json, text/plain, */*',
      Authorization: "Bearer " + spotifyApi.getAccessToken()
    }
  })
    .then(data => {
      const id = data.data.artists.items[0].id;
     
      console.log("Artist id: ", id);
      arr.push(id)
      return id;
    })
    .catch(error => console.error(error))
}

router.get('/randomize-playlist', async (req, res) => {
  
  const artistData = await Artists.findAll()

  const artists = [];
  const topArtists = artistData.map(artist => artist.get({ plain: true }))

  topArtists
    .splice(topArtists.length - 5, topArtists.length)
    .forEach(artist => artists.push({ name: artist.artist_name }))
  
  console.log(artists)

  const artistIds = [];
  Promise.all([getId(artists[0].name), getId(artists[1].name)]).then(value =>{
    console.log('************', arr);
  })
  // artists.forEach(async artist => artistIds.push(await getId(artist.name)))

  //console.log('*********', artistIds)
  // Get Recommendations Based on Seeds
  //We should have access to artistIds
  spotifyApi.getRecommendations({
      min_energy: 0.4,
      seed_artists: artistIds,
      min_popularity: 50
    })
  .then(response => response.json())
  .then(data => data)
  .catch(error => console.error("Something went wrong!", error));
})

module.exports = router;