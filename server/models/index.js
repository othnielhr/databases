var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      // use mysql SELECT to grab the data
      db.connection.query('SELECT * FROM messages', (err, data) => {
        if (err) {
          console.log(err, null);
        } else {
          console.log('data', data);
          callback(data);
        }
      });
      // console.log('query success, msg: ', msg);
    }, // a function which produces all the messages
    post: function (body, callback) {
      // use mysql INSERT INTO <table> (col1, col2, ...) VALUES (val1, val2, ...)
      console.log('body', body);
      db.connection.query(`INSERT INTO messages (user_id, message, roomname) VALUES ((SELECT id FROM users WHERE name = '${body.username}'), '${body.message}', '${body.roomname}');`);
      // if (err) {
      //   console.log(err, null);
      // } else {
      callback(null, 'posted to messages');
      // }
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.connection.query('SELECT * FROM users', (err, data) => {
        if (err) {
          consol.log(err, null);
        } else {
          console.log('user', data);
          callback(data);
        }
      });
    },
    post: function (body, callback) {
      console.log('post body', body);
      db.connection.query(`INSERT INTO users (name) VALUES ('${body.username}');`);
      callback(null, 'posted to users');
    }
  }
};

