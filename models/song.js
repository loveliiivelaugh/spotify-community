const { Model, DataTypes } = require('sequelize');
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
            type: DataTypes.STRING,
            allowNull: false
        },
        artist: {
            type: DataTypes.STRING
        },
        album: {
            type: DataTypes.STRING
        },
        genre: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'song'
        
    }
);

module.exports = Song;