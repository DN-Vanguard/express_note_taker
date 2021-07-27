// fsUtils handles the functionality of the fs module and exports functions for use in other files

// Required modules
const fs = require( 'fs' );
const util = require( 'util' );

// Converts readFile into an async promise
const readFromFile = util.promisify( fs.readFile );

// Creates a new file to provided path with provided content
const writeToFile = ( filePath, content ) => 
    fs.writeFile( filePath, content, ( err ) => 
        err ? console.log( err ) : console.log( `File written to path: ${filePath}` )
    );

// Appends an object to a file converting it through JSON
const appendToFile = ( obj, filePath ) => {
    readFromFile( filePath )
        .then(( data ) => {
            const parsedData = JSON.parse( data );

            parsedData.push( obj );

            const dataJSON = JSON.stringify( parsedData, null, 4 );

            writeToFile( filePath, dataJSON );
        });
}

// Export module functions
module.exports = { readFromFile, writeToFile, appendToFile };