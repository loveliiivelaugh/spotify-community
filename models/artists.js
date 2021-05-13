const { Model, Datatypes, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { truncate } = require('./song');

class Artists extends Model {}
 Artists.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        artist_name: {
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
        modelName: 'artists'
    }
)


module.exports = Artists;

