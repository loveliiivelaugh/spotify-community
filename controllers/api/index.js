const router = require('express').Router();

// const userRoutes = require('./userRoutes');

const spotifyRoutes = require('./spotifyRoutes');
const musicRoutes = require('./musicRoutes');
// const albumRoutes = require('./albumRoutes');
// const artistRoutes = require('./artistRoutes');
// const browseRoutes = require('./browseRoutes');
// const followRoutes = require('./followRoutes');
// const libraryRoutes = require('./libraryRoutes');
// const personalizationRoutes = require('./personalizationRoutes');
// const playlistRoutes = require('./playlistRoutes');
// const searchRoutes = require('./searchRoutes');
// const tracksRoutes = require('./tracksRoutes');
// const userProfileRoutes = require('./userProfileRoutes');
// const playerRoutes = require('./playerRoutes');

// router.use('/users', userRoutes);

router.use('/spotify', spotifyRoutes);
router.use('/music', musicRoutes);

// router.use('/albums', albumRoutes);
// router.use('/artists', artistRoutes);
// router.use('/browse', browseRoutes);
// router.use('/follow', followRoutes);
// router.use('/library', libraryRoutes);
// router.use('/personalization', personalizationRoutes);
// router.use('/playlist', playlistRoutes);
// router.use('/search', searchRoutes);
// router.use('/tracks', tracksRoutes);
// router.use('/userProfile', userProfileRoutes);
// router.use('/player', playerRoutes);

module.exports = router;
