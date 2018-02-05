// Use the express framework. See https://expressjs.com/
const express = require('express');

// Use the handlbars templating system. See
// http://handlebarsjs.com/ and
// https://github.com/ericf/express-handlebars
const exphbs = require('express-handlebars');

// Use the built in node path library
const path = require('path');

// Get our app configuration
const config = require('./config.js');

// Import our controllers
const movieControllers = require('./controllers/movies.js');

// Get our database object. See https://github.com/vitaly-t/pg-promise
const db = require('./db.js')(config.databaseURL);

// Create our express application
const app = express();

// Configure the template/view engine
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

// Serve static files out of the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Get a list of movies at '/movies'
app.get('/movies', movieControllers.list);

// Get a particular movie at '/movies/:id'
app.get('/movies/:id', movieControllers.details);

// Start our application
app.listen(config.port, () => {
    console.log(`Now running on port ${config.port}`);
    // Once it is started, establish the database connection
    db.connect()
        .then(() => {
            // Tell the controllers to use this database connection
            // See https://stackoverflow.com/questions/22586542/using-global-variables-in-express-node
            app.set('db', db);
        })
        .catch((error) => {
            // Exit program if we cannot connect
            console.log(`Error connecting to database ${error.message}`);
            process.exit();
        });
});
