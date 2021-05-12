const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Playlist extends Model {}

Playlist.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        playlist_name: {
            type: DataTypes.STRING
        },

        track_name: {
            type: DataTypes.STRING,
            reference: {
                model: 'song',
                key: 'id',
            },
        },
        artist: {
            type: DataTypes.STRING,
            references: {
                model: 'song',
                key: 'id',
            },
        },
        album: {
            type: DataTypes.STRING,
            references: {
                model: 'song',
                key: 'id',
            }
        }
        
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'playlist'
    }
);

module.exports = Playlist;