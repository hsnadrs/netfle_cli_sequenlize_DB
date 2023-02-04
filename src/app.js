const yargs = require("yargs");
const {sequelize} = require("./db/connection");

const { createMovie, readMovie, updateActor, updateDirector, Moviedelete } = require ("./movie/function");

async function app(yargsInput) {
    await sequelize.sync({alter:true});
    console.log (yargsInput);
    if (yargsInput.create) {
        //place code to create a movie here
        await createMovie({
            title: yargsInput.title,
            actor: yargsInput.actor,
            director: yargsInput.director
        })
    } else if (yargsInput.read) {
        //place code to list all our movies here
        await readMovie ();
    } else if (yargsInput.updateActor) {
        //place code to update actor field here
        await updateActor(yargsInput);
    } else if (yargsInput.updateDirector) {
        //place code to update director field here
        await updateDirector (yargsInput);
    } else if (yargsInput.delete) {
        //place code to delete a movie from our table here
        await Moviedelete (yargsInput);
    } else {
        console.log("Unrecognized Yargs command");
    }
}

app(yargs.argv);