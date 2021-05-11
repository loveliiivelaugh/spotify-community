const router = require('express').Router();
const User = require('../../models/User');
var SpotifyWebApi = require('spotify-web-api-node');
const { default: axios } = require('axios');
const { query } = require('express');

var spotifyApi = new SpotifyWebApi();

router.get('/tracks/:item', (req, res) => {
  const track = req.params.id ? req.params.id : 'Love';
  // Search tracks whose name, album or artist contains 'Love'
  spotifyApi
    .searchTracks(track)
    .then(data => console.log('Search by "Love"', data.body))
    .catch(exception => console.error(exception))
})


router.get('/album/:item', async (req, res) => {
  const albumName = req.params.item ? req.params.item : 'Love';
  // Search albums whose name, album or artist contains 'Love'
  const url = `https://api.spotify.com/v1/search?q=${albumName}&type=album}`
  const album = await axios.get(url, {
    "Authorization" : User.getToken()
  })
  spotifyApi
    .searchAlbum(album.items.id)
    .then(data => console.log('Search by "Love"', data.body))
    .catch(exception => console.error(exception))
})

router.get('/albums/:item', async (req, res) => {
  const albumsNames = req.params.item ? req.params.item : 'Love';
  // Search albums whose name, album or artist contains 'Love'
  const url = `https://api.spotify.com/v1/search?q=${albumsNames}&type=albums}`
  const albums = await axios.get(url, {
    "Authorization" : User.getToken()
  })
  spotifyApi
    .searchAlbums(albums.items.id)
    .then(data => console.log('Search by "Love"', data.body))
    .catch(exception => console.error(exception))
})

router.get('/artist/:item', async (req, res) => {
  const artist = req.params.item ? req.params.item : 'Love';
  // Search artist who contains 'Love'
  const url = `https://api.spotify.com/v1/search?q=${artist}&type=artist}`
  const artist = await axios.get(url, {
    "Authorization" : User.getToken()
  })
  spotifyApi
    .searchArtist(artist.items.id)
    .then(data => console.log('Search by "Love"', data.body))
    .catch(exception => console.error(exception))
})



