// Required modules
const express = require( 'express' );
const path = require( 'path' );
const routes = require( './routes/index.js' );

// Open port on Heroku or default to 3001;
const PORT = process.env.PORT || 3001;

// Load Express.js to app
const app = express();

// Middleware
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ));

// Open access to file directory 'public'
app.use( express.static( 'public' ));

// Route requests to index.js
app.use( '/', routes );

// Listening port
app.listen(PORT, () =>
  console.log( `Server open at http://localhost:${PORT}` )
);