var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var connection = mysql.createConnection({
  user: 'root',
  database: 'chat'
});
connection.connect(function(err) {
  if (err) {
    console.log('error connecting', err);
  } else {
    console.log('connected as id ', + connection.threadId);
  }
});
exports.connection = connection;