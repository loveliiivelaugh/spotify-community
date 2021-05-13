const router = require('express').Router();
const Artists = require('../../models/artists.js');

router.post('/artists', async (req, res) => {
    // console.log(req.body);
    const user_id = req.session.user_id;
  console.log(user_id);
    const artists = [];
  
    await req.body.forEach(artist => artists.push({
      artist_name: artist,
      user_id: req.session.user_id
    }))
  
    console.log(artists);

    
  try {
    const artistData = await Artists.bulkCreate(artists)
    // const artistData = await Music.create({
    //   artist: req.body
    // });
    res.status(200).json(artistData)
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
})

module.exports = router