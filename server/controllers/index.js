var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('controllers');
      models.messages.get((err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.send(data);
        }
      });
      res.writeHead(200, 'Content-Type: application/json');
      res.end(models.messages.get());
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('controllers');
      res.writeHead(200, 'Content-Type: application/json');
      res.end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('controllers');
      res.writeHead(200, 'Content-Type: application/json');
      res.end();
    },
    post: function (req, res) {
      console.log('controllers');
      res.writeHead(200, 'Content-Type: application/json');
      res.end();
    }
  }
};

