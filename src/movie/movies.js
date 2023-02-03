const {DataTypes} = require("sequelize");
const {sequelize} = require("../db/connection");

const Movie = sequelize.define("movie", {
    // id: {
    //     type: DataTypes.id,
    //     allowNull: false,
    //     unique: true
    // },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    
    director: {
        type: DataTypes.STRING,
        defaultValue: "Not known"
    }}
);

module.exports = Movie;