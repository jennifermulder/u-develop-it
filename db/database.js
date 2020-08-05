//Connect to SQLite database
//verbose: messages in the terminal regarding runtime
const sqlite3 = require('sqlite3').verbose();

// Connect to database
// create new database, created with the election.db file (error callback)
const db = new sqlite3.Database('./db/election.db', err => {
  if (err) {
    return console.error(err.message);
  }

  console.log('Connected to the election database.');
});

module.exports = db;