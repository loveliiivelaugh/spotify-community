const { Model, Datatypes, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { truncate } = require('./song');

class Genres extends Model {}

Genres.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        genre_name: {
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
        modelName: 'genres'
    }
)


module.exports = Genres;

