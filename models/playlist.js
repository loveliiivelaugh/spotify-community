const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Playlist extends Model {}

Playlist.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        playlist_name: {
            type: Datatypes.STRING
        },

        track_name: {
            type: Datatypes.STRING,
            reference: {
                model: 'song',
                key: 'id',
            },
        },
        artist: {
            type: Datatypes.STRING,
            references: {
                model: 'song',
                key: 'id',
            },
        },
        album: {
            type: Datatypes.STRING,
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