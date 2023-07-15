const { DataTypes } = require("sequelize");

const database = require("../DB_connection");

const Favorite = database.define(
    'favorite',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        character_id: {
            type: DataTypes.UUID,
        },
    },
    {
        timestamps: false,
    },
    {
        // No pluralization.
        freezeTableName: true,
    }
);

module.exports = Favorite;