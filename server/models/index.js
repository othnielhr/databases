var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      // use mysql SELECT to grab the data
      console.log('query ');
      db.connection.query('SELECT * FROM messages', (err, data) => {
        if (err) {
          console.log(err, null);
        } else {
          console.log('data', data);
        }
      });
      console.log('query success, msg: ', msg);
    }, // a function which produces all the messages
    post: function () {
      // use mysql INSERT INTO <table> (col1, col2, ...) VALUES (val1, val2, ...)
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

