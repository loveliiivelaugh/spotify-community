const router = require('express').Router();

router.get('/tracks/:item', (req, res) => {
  const track = req.params.id ? req.params.id : 'Love';
  // Search tracks whose name, album or artist contains 'Love'
  spotifyApi
    .searchTracks(track)
    .then(data => console.log('Search by "Love"', data.body))
    .catch(exception => console.error(exception))
})