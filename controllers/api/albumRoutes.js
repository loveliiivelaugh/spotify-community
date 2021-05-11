const router = require('express').Router();
const User = require('../../models/User');
var SpotifyWebApi = require('spotify-web-api-node');
const axios = require('axios');


router.get('/tracks/:track', (req, res) => {
  try {
    const track = req.params?.track;

    if (!track) { 
      res.status(400).json({ message: "Must enter a valid track name." }) 
    }

    spotifyApi
      .searchTracks(track)
      .then(data => console.log(`Search by "${track}": `, data.body) && res.json(data.body))
      .catch(exception => console.error(exception))

  } catch (error) {
    console.error(error);
  }
})


router.get('/album/:album', async (req, res) => {
  const albumName = req.params?.album;

  if (!albumName) { 
    res.status(400).json({ message: "Must enter a valid album name." }) 
  }

  const url = `https://api.spotify.com/v1/search?q=${albumName}&type=album`;

  const album = await axios.get(url, {
    "Authorization" : User.getToken()
  })

  spotifyApi
    .searchAlbum(album.items.id)
    .then(data => console.log(`Search by "${albumName}": `, data.body) && res.json(data.body))
    .catch(exception => console.error(exception))
})

router.get('/artist/:artist', async (req, res) => {
  const artistName = req.params?.artist;

  if (!artistName) { 
    res.status(400).json({ message: "Must enter a valid artist name." }) 
  }

  const url = `https://api.spotify.com/v1/search?q=${artistName}&type=artist`;

  const artist = await axios.get(url, {
    "Authorization" : User.getToken()
  })

  spotifyApi
    .searchArtist(artist.items.id)
    .then(data => console.log(`Search by "${artistName}": `, data.body) && res.json(data.body))
    .catch(exception => console.error(exception))
})

router.get('/albums/artist/:artist', async (req, res) => {
  const artistName = req.params?.artist;

  if (!artistName) { 
    res.status(400).json({ message: "Must enter a valid artist name." }) 
  }

  const url = `https://api.spotify.com/v1/search?q=${artistName}&type=artist`;

  const artist = await axios.get(url, {
    "Authorization" : User.getToken()
  })

  // Get albums by a certain artist
  spotifyApi.getArtistAlbums(artist.items.id)
    .then(data => console.log(`Artist albums by artist, ${}`, data.body) && res.json(data.body))
    .catch(exception =>  console.error(exception))
}