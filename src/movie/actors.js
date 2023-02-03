const {DataTypes} = require("sequelize");
const {sequelize} = require("../db/connection");

const Actor = sequelize.define("Actor", {
    // actorid: {
    //     type: DataTypes.id,
    //     allowNull: false,
    //     unique: true
    // },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}
);

module.exports = Actor;