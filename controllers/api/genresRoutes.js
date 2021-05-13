const router = require('express').Router();
const Genres = require('../../models/artists.js');

router.post('/genres', async (req, res) => {
    // console.log(req.body);
    const user_id = req.session.user_id;
  console.log(user_id);
    const genres = [];
  
    await req.body.forEach(genre => genres.push({
      genre_name: genre,
      user_id: req.session.user_id
    }))
  
    console.log(genres);

    
  try {
    const genreData = await Genres.bulkCreate(genres)
    // const artistData = await Music.create({
    //   artist: req.body
    // });
    res.status(200).json(genreData)
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
})


module.exports = router 