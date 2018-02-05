# Movie MVC homework

This is a small application that displays movies from
our earlier SQL homework. You're going to need to find
the parts of this small app that say "TODO" and fill 
them in. There are very few and very few lines of code
are required; however, filling in the 
right code will likely require a tad of web
searching and studying this code.

The purpose of this assignment is to reinforce the 
SQL, JavaScript, and server-side web application 
lessons we've covered this semester.

## Example application

There is an example, completed application
running at [http://movie-mvc-example.cpsc213.io/movies](http://movie-mvc-example.cpsc213.io/movies). 

## Grading binaries

As usual, there is a binary that does the grading.

* [Windows](http://public.cpsc213.io/movie-mvc-grading-windows-v1.0.exe)
* [Linux](http://public.cpsc213.io/movie-mvc-grading-linux-v1.0)
* [Mac](http://public.cpsc213.io/movie-mvc-grading-mac-v1.0)

Running the binary something akin to the following

```
./movie-mvc-grading test 'http://localhost:9000'
✅ PASS - Your website is up (requesting /movies)
✅ PASS - There are 499 movies
✅ PASS - There are 9 movies when searching for "no" (no quotes)
✅ PASS - The URL /movies/7 has an h1 with content "Alexander"
```

The grading code is
[here](https://github.com/yale-cpsc-213/movie-mvc-grading) and you
are free to look at it. The last two tests are randomized, as you
will notice.

## Structure of the starter code

```
.
├── LICENSE
├── .jsbeautify - Configuration file for js-beautify
├── .eslintrc - Configuration file for ESlint
├── README.md
├── config.js - Parses environment variables, a la 12-factor app
├── controllers - All our controllers/handlers
│   └── movies.js
├── db.js - Database configuration in here
├── models - All our models
│   └── movies.js
├── package-lock.json - npm "lock" file for dependencies
├── package.json - npm configuration file
├── public - All our "static" files: images, css, client-side js
│   └── styles
│       └── movies.css
├── server.js - Our main entry point
└── views - All our views/templates
    ├── layouts
    │   └── main.handlebars
    ├── movie-details.handlebars
    └── movie-list.handlebars
```

## How to get started

You should cloned this to your development environment.
The you'll need Node.js installed. You should then run
`npm install` and you can start the application with 
`npm start`. You'll need to first define two environment
variables: `PORT` and `DATABASE_URL`. You should use the
database that the instructor provides, which will be on
the course website (it will be on the assignment page).

You'll need to deploy this application to the interwebs
somewhere. When you submit the assignment, you'll submit
your repo on GitHub and the URL of your app running on
the web.

## Random

This code includes configuration files for 
[js-beautify](https://github.com/beautify-web/js-beautify)
and [ESlint](https://eslint.org/). You can use these two
tools to improve your enjoyment of writting JavaScript:
you'll have fewer errors and better code.