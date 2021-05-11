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
        }
    }
)