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
            type: DataTypes.INTEGER,
            reference: {
                model: 'song',
                key: 'id',
            },
        },
        
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            },
        },        
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'playlist'
    }
);

module.exports = Playlist;