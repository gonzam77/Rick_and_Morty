const { DataTypes } = require("sequelize");

const database = require("../DB_connection");

const Character = database.define(
    'character',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        species: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('Alive', 'Dead', 'unknown'),
            allowNull: false,
        },
        origin: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_fav: {
            type:DataTypes.BOOLEAN,
            defaultValue: false,
        }

    },
    {
        timestamps: false,
        // No pluralization.
        freezeTableName: true,
    },
);

module.exports = Character;