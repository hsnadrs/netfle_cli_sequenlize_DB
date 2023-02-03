const {DataTypes} = require("sequelize");
const {sequelize} = require("../db/connection");
const Movie = require("../movie/movies");
const Actor = require("../movie/actors");

const Movies_Actors = sequelize.define("Movies_Actors", {
    MovieId: {
        type: DataTypes.INTEGER,
        references: {
          model: Movie, 
          key: 'id'
        }
      },
      ActorId: {
        type: DataTypes.INTEGER,
        references: {
          model: Actor, 
          key: 'id'
        }
      }

}
);
Movie.belongsToMany(Actor, { through: Movies_Actors });
Actor.belongsToMany(Movie, { through: Movies_Actors });
module.exports = Movies_Actors;

