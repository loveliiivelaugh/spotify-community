const router = require('express').Router();
const User = require('../../models/User');
var SpotifyWebApi = require('spotify-web-api-node');
const axios = require('axios');


router.get('/tracks/:track', (req, res) => {
  try {
    const track = req.params.track ? req.params.track : null;

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
  const albumName = req.params.album ? req.params.album : null;

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
  const artistName = req.params.artist ? req.params.artist : null;

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

router.get('/artists/:item', async (req, res) => {
  const artistsName = req.params.item ? req.params.item : 'Love';
  // Search all artistsName who contains 'Love'
  const url = `https://api.spotify.com/v1/search?q=${artistsName}&type=artists}`
  const artists = await axios.get(url, {
    "Authorization" : User.getToken()
  })
  spotifyApi
    .searchArtists(artists.items.id)
    .then(data => console.log('Search by "Love"', data.body))
    .catch(exception => console.error(exception))
})

router.get('/albums/artist/:artist', async (req, res) => {
  const artistName = req.params.artist ? req.params.artist : null;

  if (!artistName) { 
    res.status(400).json({ message: "Must enter a valid artist name." }) 
  }

  const url = `https://api.spotify.com/v1/search?q=${artistName}&type=artist`;

  const artist = await axios.get(url, {
    "Authorization" : User.getToken()
  })

  // Get albums by a certain artist
  spotifyApi.getArtistAlbums(artist.items.id)
    .then(data => {
      console.log(`Artist albums by artist, ${artistName}`, data.body);
      res.json(data.body);
    })
    .catch(exception => console.error(exception))
})

router.get('/tracks/:item', async (req, res) => {
  const tracksName = req.params.item ? req.params.item : 'Love';
  // Search tracksName whose name, album or artist who contains 'Love'
  const url = `https://api.spotify.com/v1/search?q=${tracksName}&type=tracks}`
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

router.get('/AudioFeaturesForTrack/:item', async (req, res) => {
  const AudioFeaturesForTrack = req.params.item ? req.params.item : 'Love';
  // Get an audio features for a track
  const url = `https://api.spotify.com/v1/search?q=${AudioFeaturesForTrack}&type=AudioFeaturesForTrack}`
  const AudioFeaturesForTrack = await axios.get(url, {
    "Authorization" : User.getToken()
  })
  spotifyApi
    .searchAudioFeaturesForTrack(AudioFeaturesForTrack.params.id)
    .then(data => console.log(data.body))
    .catch(exception => console.error(exception))
})

router.get('/AudioAnalysisForTrack/:item', async (req, res) => {
  const AudioAnalysisForTrack = req.params.item ? req.params.item : 'Love';
  // Get audio analysis for tracks
  const url = `https://api.spotify.com/v1/search?q=${AudioAnalysisForTrack}&type=AudioAnalysisForTrack}`
  const AudioAnalysisForTrack = await axios.get(url, {
    "Authorization" : User.getToken()
  })
  spotifyApi
    .searchAudioAnalysisForTrack(AudioAnalysisForTrack.params.id)
    .then(data => console.log(data.body))
    .catch(exception => console.error(exception))
})

router.get('/getAudioFeaturesForTracks/:item', async (req, res) => {
  const getAudioFeaturesForTracks = req.params.item ? req.params.item : 'Love';
  // Get audio analysis for tracks
  const url = `https://api.spotify.com/v1/search?q=${getAudioFeaturesForTracks}&type=getAudioFeaturesForTracks}`
  const getAudioFeaturesForTracks = await axios.get(url, {
    "Authorization" : User.getToken()
  })
  spotifyApi
    .getAudioFeaturesForTracks(getAudioFeaturesForTracks.params.id)
    .then(data => console.log(data.body))
    .catch(exception => console.error(exception))
})
