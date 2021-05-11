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





// // {
//   "artists": {
//     "href": "https://api.spotify.com/v1/search?query=tania+bowra&offset=0&limit=20&type=artist",
//     "items": [
//         {
//             "external_urls": {
//                 "spotify": "https://open.spotify.com/artist/08td7MxkoHQkXnWAYD8d6Q"
//             },
//             "genres": [],
//             "href": "https://api.spotify.com/v1/artists/08td7MxkoHQkXnWAYD8d6Q",
//             "id": "08td7MxkoHQkXnWAYD8d6Q",
//             "images": [
//                 {
//                     "height": 640,
//                     "url": "https://i.scdn.co/image/f2798ddab0c7b76dc2d270b65c4f67ddef7f6718",
//                     "width": 640
//                 },
//                 {
//                     "height": 300,
//                     "url": "https://i.scdn.co/image/b414091165ea0f4172089c2fc67bb35aa37cfc55",
//                     "width": 300
//                 },
//                 {
//                     "height": 64,
//                     "url": "https://i.scdn.co/image/8522fc78be4bf4e83fea8e67bb742e7d3dfe21b4",
//                     "width": 64
//                 }
//             ],
//             "name": "Tania Bowra",
//             "popularity": 0,
//             "type": "artist",
//             "uri": "spotify:artist:08td7MxkoHQkXnWAYD8d6Q"
//         }
//     ],
//     "limit": 20,
//     "next": null,
//     "offset": 0,
//     "previous": null,
//     "total": 1
// }
// }