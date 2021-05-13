const router = require('express').Router();
const Tracks = require('../../models/tracks.js');

router.post('/tracks', async (req, res) => {
    // console.log(req.body);
    const user_id = req.session.user_id;
  console.log(user_id);
    const tracks = [];
  
    await req.body.forEach(track => tracks.push({
      track_name: track,
      user_id: req.session.user_id
    }))
  
    console.log(tracks);

    
  try {
    const trackData = await Tracks.bulkCreate(tracks)
    // const artistData = await Music.create({
    //   artist: req.body
    // });
    res.status(200).json(trackData)
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
})

module.exports = router