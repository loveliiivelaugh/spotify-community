const router = require('express').Router();

const User = require('../models/user.js');
// const Music = require('../models/Music.js');

const Artists = require ('../models/artists');
const Genres = require ('../models/genres');
const Tracks = require ('../models/tracks');


const withAuth = require('../utils/auth');
const spotifyApi = require('../utils/spotify.js');
const axios = require("axios");


//This is the route to render the home page => '/'
router.get('/', async (req, res) => {
<<<<<<< HEAD
=======
  // const musicData = await Music.findAll({ sort: ["ascending"] });
>>>>>>> main

  const artistData = await Artists.findAll({order: [['id', 'DESC']]});
  const genreData = await Genres.findAll({order: [['id', 'DESC']]});
  const trackData = await Tracks.findAll({order: [['id', 'DESC']]});

  const artist = artistData.map(artist => artist.get({ plain: true}));
  const genre = genreData.map(genre => genre.get({ plain: true}));
  const track = trackData.map(track => track.get({ plain: true}));

<<<<<<< HEAD
=======
  // const music = musicData.map(music => music.get({ plain: true }))

>>>>>>> main
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });

    const user = userData.get({ plain: true });

  console.log(user, artist, genre, track);

  try {
    res.render('homepage', {
      logged_in: req.session.logged_in,
      user: user,
      artists: artist.splice(0, 5),
<<<<<<< HEAD
      genres: genre.splice(0, 5),
=======
      genres: genre.splice(0,5 ),
>>>>>>> main
      tracks: track.splice(0, 5)

    });
  } catch (err) {

    res.status(500).json(err);
  }
});

router.get('/playlists', async (req, res) => {

  console.log(spotifyApi.getAccessToken())

  try {
    res.render('playlist', { 
      logged_in: req.session.logged_in,
      logged_in_with_spotify: spotifyApi.getAccessToken() === null || undefined ? false : true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      // include: [{ model: Music }],
    });

    const user = userData.get({ plain: true });

    res.render('homepage', {
      ...user,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/playlists');
    return;
  }

  res.render('login');
});

module.exports = router;
