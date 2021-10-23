var models = require('../models');
var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      db.Messages.findAll( {include: [db.Users]} )
        .complete(function(err, results) {
          res.send(result);
        });
      // console.log('controllers get');
      // models.messages.get((err, data) => {
      //   if (err) {
      //     res.send(err);
      //   } else {
      //     console.log('data here', data);
      //     res.send(data);
      //   }
      // });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // console.log('controllers post');
      console.log('req here', req);
      models.messages.post(req.body, (err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.send('jobs done');
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.send(data);
        }
      });
    },
    post: function (req, res) {
      console.log('request', req);
      models.users.post(req.body, (err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.send('jobs done');
        }
      });
    }
  }
};

