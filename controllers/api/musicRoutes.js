const router = require('express').Router();
const Music = require('../../models/Music.js')


router.get('/artist/:id', (req, res) => {
  try {
    const artistData = await Music.findByPk(req.params.id);
    res.status(200).json(artistData)
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
})

router.get('/artists', (req, res) => {
  try {
    const artistData = await Music.findAll();
    res.status(200).json(artistData)
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
})

router.post('/artist', (req, res) => {
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

router.put('/artist/:id', (req, res) => {})

router.delete('/artist/:id', (req, res) => {
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


router.get('/track/:id', (req, res) => {
  try {
    const trackData = await Music.findByPk(req.params.id);
    res.status(200).json(trackData)
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
})

router.get('/tracks', (req, res) => {
  try {
    const trackData = await Music.findAll();
    res.status(200).json(trackData)
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
})

router.post('/track', (req, res) => {
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

router.delete('/track/:id', (req, res) => {
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


router.get('/genre/:id', (req, res) => {
  try {
    const genreData = await Music.findByPk(req.params.id);
    res.status(200).json(genreData)
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
})

router.get('/genres', (req, res) => {
  try {
    const genreData = await Music.findAll();
    res.status(200).json(genreData)
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
})

router.post('/genre', (req, res) => {
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

router.put('/genre/:id', (req, res) => {})

router.delete('/genre/:id', (req, res) => {
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
