const router = require('express').Router();
const User = require('../models/User.js');
const Music = require('../models/Music.js');
const withAuth = require('../utils/auth');
const spotifyApi = require('../utils/spotify.js');

router.get('/', async (req, res) => {

  const musicData = await Music.findAll({order: [['id', 'DESC']]});

  console.log(musicData);

  const music = musicData.map(music => music.get({ plain: true }))

  // console.log(music);
  // const music = musicData.map(music => music.get({ plain: true }))


  try {
    res.render('homepage', {
      logged_in: req.session.logged_in,
      artists: music.splice(0, 5)

    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/playlists', async (req, res) => {
  try {
    res.render('playlist', { 
      logged_in: req.session.logged_in
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
      include: [{ model: Music }],
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