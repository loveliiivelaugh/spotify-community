const sequelize = require('../config/connection');
const { playlist, song, album, user } = require('../models');

const playlistData = require('./playlistData.json'); 
const userData = require('./userData.json');
const songData = require('./songData.json'); 
const albumData = require('./albumData.json'); 


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(spotifyData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();