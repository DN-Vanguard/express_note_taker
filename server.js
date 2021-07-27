// Required modules
const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid'); // added package json

// Open port on Heroku or default to 3001;
const PORT = process.env.PORT || 3001;

// Load Express.js to app
const app = express();

// Middleware
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ));

// Open access to file directory 'public'
app.use( express.static( 'public' ));

const overwriteDBFile = (noteCollection) => {
    fs.writeFile("./db/db.json", JSON.stringify(noteCollection, null, 4), (err) => {
        if (err) throw err;
        console.log('Saved db.json');
    });
};

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});


// Listening port
app.listen(PORT, () =>
  console.log( `Server open at http://localhost:${PORT}` )
);
