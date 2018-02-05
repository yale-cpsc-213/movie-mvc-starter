// Controllers should go here. No controllers
// in the server.js please.

const movieModels = require('../models/movies.js');

/**
 * Controller that renders a list of movies
 * @param  {Request} req - An express request object
 * @param  {Response} res - An express response object
 * @returns undefined
 */
async function list(req, res) {
    const db = req.app.get('db');
    let result = {
        movies: [],
        error: null,
    };
    // TODO: fill me in. Get all the movies
    // here and send them to the template/view.
    res.render('movie-list', result);
}

/**
 * Controller that renders a single movie
 * @param  {Request} req - An express request object
 * @param  {Response} res - An express response object
 * @returns undefined
 */
async function details(req, res) {
    const db = req.app.get('db');
    // TODO: fill me in. Get the movie
    // here and send it to the template/view.
    res.render('movie-details', result);
}

module.exports = {
    list,
    details,
};
