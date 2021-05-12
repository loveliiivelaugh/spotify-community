const { Model, Datatypes, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { truncate } = require('./song');

class Music extends Model {}

Music.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        artist: {
            type: DataTypes.STRING,
            
        },
        tracks: {
            type: DataTypes.STRING,
        },
        genres: {
            type: DataTypes.STRING,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'music'
    }
)


module.exports = Music;

