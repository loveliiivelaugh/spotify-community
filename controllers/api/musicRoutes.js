const router = require('express').Router();
// const { Model } = require('sequelize/types');
const Music = require('../../models/Music.js')


router.get('/artist/:id', async (req, res) => {
  try {
    const artistData = await Music.findByPk(req.params.id);
    res.status(200).json(artistData)
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
})

router.get('/artists', async (req, res) => {
  try {
    const artistData = await Music.findAll();
    res.status(200).json(artistData)
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
})

router.post('/artists', async (req, res) => {
  try {
    const artistData = await Music.create({
      artist: req.body.artist
    });
    res.status(200).json(artistData)
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
})

// router.put('/artist/:id', (req, res) => {})

router.delete('/artist/:id', async (req, res) => {
  try {
    const artistData = await Music.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!artistData) {
      res.status(404).json({ message: 'No artist found with this id!' });
      return;
    }

    res.status(200).json(artistData)
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
})


router.get('/track/:id', async (req, res) => {
  try {
    const trackData = await Music.findByPk(req.params.id);
    res.status(200).json(trackData)
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
})

router.get('/tracks', async (req, res) => {
  try {
    const trackData = await Music.findAll();
    res.status(200).json(trackData)
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
})

router.post('/tracks', async (req, res) => {
  try {
    const trackData = await Music.create({
      track: req.body.track
    });
    res.status(200).json(trackData)
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
})

router.put('/track/:id', (req, res) => {})

router.delete('/track/:id', async (req, res) => {
  try {
    const trackData = await Music.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!trackData) {
      res.status(404).json({ message: 'No track found with this id!' });
      return;
    }

    res.status(200).json(trackData)
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
})


router.get('/genre/:id', async (req, res) => {
  try {
    const genreData = await Music.findByPk(req.params.id);
    res.status(200).json(genreData)
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
})

router.get('/genres', async (req, res) => {
  try {
    const genreData = await Music.findAll();
    res.status(200).json(genreData)
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
})

router.post('/genres', async (req, res) => {
  try {
    const genreData = await Music.create({
      genre: req.body.genre
    });
    res.status(200).json(genreData)
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
})

router.put('/genre/:id', async (req, res) => {})

router.delete('/genre/:id', async (req, res) => {
  try {
    const genreData = await Music.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!genreData) {
      res.status(404).json({ message: 'No genre found with this id!' });
      return;
    }

    res.status(200).json(genreData)
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
}) 

module.exports = router
