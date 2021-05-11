const sequelize = require('../config/connection');
const { User } = require('../models');

const spotifyData = require('./spotifyData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(spotifyData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();