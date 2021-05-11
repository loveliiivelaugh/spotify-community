const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Song extends Model {}

Song.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        track: {
            type: Datatypes.STRING,
            allowNull: false
        },
        artist: {
            type: Datatypes.STRING
        },
        album: {
            type: Datatypes.STRING
        },
        genre: {
            type: Datatypes.STRING
        }
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'song'
    }
);

module.exports = Song;