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

router.get('/artists/:item', async (req, res) => {
  const artists = req.params.item ? req.params.item : 'Love';
  // Search all artists who contains 'Love'
  const url = `https://api.spotify.com/v1/search?q=${artists}&type=artists}`
  const artists = await axios.get(url, {
    "Authorization" : User.getToken()
  })
  spotifyApi
    .searchArtists(artists.items.id)
    .then(data => console.log('Search by "Love"', data.body))
    .catch(exception => console.error(exception))
})

router.get('/artistAlbums/:item', async (req, res) => {
  const artistAlbums = req.params.item ? req.params.item : 'Love';
  // Search albums by a certain artist who contains 'Love'
  const url = `https://api.spotify.com/v1/search?q=${artistAlbums}&type=artistAlbums}`
  const artistAlbums = await axios.get(url, {
    "Authorization" : User.getToken()
  })
  spotifyApi
    .searchArtistAlbums(artistAlbums.items.id)
    .then(data => console.log('Search by "Love"', data.body))
    .catch(exception => console.error(exception))
})

router.get('/tracks/:item', async (req, res) => {
  const tracks = req.params.item ? req.params.item : 'Love';
  // Search tracks whose name, album or artist who contains 'Love'
  const url = `https://api.spotify.com/v1/search?q=${tracks}&type=tracks}`
  const tracks = await axios.get(url, {
    "Authorization" : User.getToken()
  })
  spotifyApi
    .searchTracks(tracks.items.id)
    .then(data => console.log('Search by "Love"', data.body))
    .catch(exception => console.error(exception))
})

router.get('/playlists/:item', async (req, res) => {
  const playlists = req.params.item ? req.params.item : 'Love';
  // Search playlists whose name contains 'Love'
  const url = `https://api.spotify.com/v1/search?q=${playlists}&type=playlists}`
  const playlists = await axios.get(url, {
    "Authorization" : User.getToken()
  })
  spotifyApi
    .searchPlaylists(playlists.items.id)
    .then(data => console.log('Search by "Love"', data.body))
    .catch(exception => console.error(exception))
})

router.get('/albumTracks/:item', async (req, res) => {
  const albumTracks = req.params.item ? req.params.item : 'Love';
  // Get tracks in an album
  const url = `https://api.spotify.com/v1/search?q=${albumTracks}&type=albumTracks}`
  const albumTracks = await axios.get(url, {
    "Authorization" : User.getToken()
  })
  spotifyApi
    .searchAlbumTracks(AlbumTracks.params.id, { limit : 5, offset : 1 })
    .then(data => console.log(data.body))
    .catch(exception => console.error(exception))
})

router.get('/ArtistTopTracks/:item', async (req, res) => {
  const ArtistTopTracks = req.params.item ? req.params.item : 'Love';
  // Get an artist's top tracks
  const url = `https://api.spotify.com/v1/search?q=${ArtistTopTracks}&type=ArtistTopTracks}`
  const ArtistTopTracks = await axios.get(url, {
    "Authorization" : User.getToken()
  })
  spotifyApi
    .searchArtistTopTracks(ArtistTopTracks.params.id, 'GB')
    .then(data => console.log(data.body))
    .catch(exception => console.error(exception))
})

router.get('/ArtistRelatedArtists/:item', async (req, res) => {
  const ArtistRelatedArtists = req.params.item ? req.params.item : 'Love';
  // Get an artist's related to an artist
  const url = `https://api.spotify.com/v1/search?q=${ArtistRelatedArtists}&type=ArtistRelatedArtists}`
  const ArtistRelatedArtists = await axios.get(url, {
    "Authorization" : User.getToken()
  })
  spotifyApi
    .searchArtistRelatedArtists(ArtistRelatedArtists.params.id)
    .then(data => console.log(data.body))
    .catch(exception => console.error(exception))
})







