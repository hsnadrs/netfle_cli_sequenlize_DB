//const Movie = require("./table");
const Movie = require("../movie/movies");
const Actor = require("../movie/actors");
const ActorMovie = require("../movie/movies_actors_ER");
const sequelize = require("../db/connection");

exports.createMovie = async (movieObj) => {
    try {
        
        // create/insert movie to Movie table, KEY or id will be auto created and returned
        let addMovie = await Movie.create({title: movieObj.title, director: movieObj.diretor});
        // create/insert Actor to Actor table, KEY or id will be auto created and returned
        let addActor = await Actor.create(
            {name: movieObj.actor});
        // create/insert movie_actor M-M table with returned id or keys, KEY or id will be auto created and returned
        let newActorMovie = await ActorMovie.create(
            {MovieId: addMovie.id,
            ActorId: addActor.id
            });
    } catch (error) {
        console.log(error);
    }
}
const { QueryTypes } = require('sequelize');
exports.readMovie = async (movieObj) => {
    try {
        //const newMovie = await Movie.findAll(JSON.stringify());
        
        const Movies = await sequelize.query(
        `SELECT *
        FROM Movies 
        LEFT JOIN  movies_actors
             ON Movies.id = MovieId 
         LEFT JOIN  Actors
             ON  ActorId = Actors.id
        ;`

        , { type: QueryTypes.SELECT });
        console.log(Movie);
        
    } catch (error) {
        console.log(error);
    }
}
exports.updateActor = async (movieObj) => {
    try {
        // const newMovie = await Movie.update({ title: movieObj.title, director: movieObj.director }, {
        //     where: {
        //       actor: movieObj.actor
        //     }
        //   });
      
const newMovies = await sequelize.query(`Update actor SET actor.name = movieObj.actor FROM actors 
WHERE actors.id = (SELECT ActorId from movies_actors LEFT JOINT Movies ON Movies.title = movieObj.title )`,
 { type: QueryTypes.UPDATE });
        
        
        console.log(newMovies);
    } catch (error) {
        console.log(error);
    }
}



  exports.Moviedelete = async (movieObj) => {
    try {
//find id of movie to be deleted
        const MovieId = await Movie.findOne({where:{title: movieObj.title}});
        // delete a movie from M-M movies_actors table
        const status     = await ActorMovie.destroy({where:{MovieId: MovieId.id}});
        // delete the same movie from movies table
        const eraseMovie = await Movie.destroy({where:{title: movieObj.title}});

        // const newMovie = await Movie.destroy({
        //     where: {
        //         title: movieObj.title
        //     }
        //   });    
        
        console.log(eraseMovie);
    } catch (error) {
        console.log(error);
    }
}