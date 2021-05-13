const router = require('express').Router();
// const { Model } = require('sequelize/types');
const Music = require('../../models/music.js')


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
  // console.log(req.body);
  const user_id = req.session.user_id;
console.log(user_id);
  const artists = [];

  await req.body.forEach(artist => artists.push({
    artist: artist,
    user_id: req.session.user_id
  }))

  console.log(artists);

  try {
    const artistData = await Music.bulkCreate(artists)
    // const artistData = await Music.create({
    //   artist: req.body
    // });
    res.status(200).json(artistData)
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
})

router.put('/artist/:id', async (req, res) => {
  // Calls the update method on the Book model
  Music.update(
    {
      // All the fields you can update and the data attached to the request body.
      artist: req.body.artist,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then(updatedArtist => res.json(updatedArtist))
    .catch(err => res.json(err))
});


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
  const user_id = req.session.user_id;
  const tracks = [];
  
  await req.body.forEach(track => tracks.push({
    tracks: track,
    user_id: req.session.user_id
  }))
  
  console.log(tracks);
  
  try {
    const trackData = await Music.bulkCreate(tracks)
    res.status(200).json(trackData)
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
  })

router.put('/track/:id', async (req, res) => {
  // Calls the update method on the Book model
  Music.update(
    {
      // All the fields you can update and the data attached to the request body.
      track: req.body.track,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then(updatedTrack => res.json(updatedTrack))
    .catch(err => res.json(err))
});

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
const user_id = req.session.user_id;
const genres = [];

await req.body.forEach(genre => genres.push({
  genres: genre,
  user_id: req.session.user_id
}))

console.log(genres);

try {
  const genreData = await Music.bulkCreate(genres)
  res.status(200).json(genreData)
} catch (error) {
  console.error(error);
  res.status(500).json(error);
}
})

  //   try {
//     const genreData = await Music.create({
//       genre: req.body.genre
//     });
//     res.status(200).json(genreData)
//   } catch (error) {
//     console.error(error);
//     res.status(500).json(error);
//   }
// })


router.put('/genre/:id', async (req, res) => {
  // Calls the update method on the Book model
  Music.update(
    {
      // All the fields you can update and the data attached to the request body.
      genre: req.body.genre,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then(updatedGenre => res.json(updatedGenre))
    .catch(err => res.json(err))
});


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