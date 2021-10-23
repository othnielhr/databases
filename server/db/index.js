var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

db.authenticate()
  .then(function() {
    return console.log('connected to database');
  })
  .catch(function(err) {
    console.log('unable to connect to database: ', err);
    db.close();
  });


var User = db.define('user', {
  name: Sequelize.STRING
});

var Messages = db.define('messages', {
  /* eslint-disable camelcase */
  user_id: Sequelize.INTEGER,
  message: Sequelize.STRING,
  roomname: Sequelize.STRING
});


module.exports = db;

// var mysql = require('mysql');

// // Create a database db and export it from this file.
// // You will need to connect with the user "root", no password,
// // and to the database "chat".
// var db = mysql.createdb({
//   user: 'root',
//   database: 'chat'
// });
// db.connect(function(err) {
//   if (err) {
//     console.log('error connecting', err);
//   } else {
//     console.log('connected');
//   }
// });
// module.exports.db = db;