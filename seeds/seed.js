const sequelize = require('../config/connection');

const { Song, User, Playlist } = require('../models');


const playlistData = require('./playlistData.json'); 
const userData = require('./userData.json');
const songData = require('./songData.json'); 
// const albumData = require('./albumData.json'); 


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const userData = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const songData = await Song.bulkCreate(songData, {
    individualHooks: true,
    returning: true,
  });

  const playlistData = await Playlist.bulkCreate(playlistData, {
    individualHooks: true,
    returning: true,
  });
  await User.bulkCreate(songData, {
    individualHooks: true,
    returning: true,
  });

  // for (const project of projectData) {
  //   await Project.create({
  //     ...project,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }



  process.exit(0);
};

seedDatabase();