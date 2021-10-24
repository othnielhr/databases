var models = require('../models');
var {Messages} = require('../db');
var {User} = require('../db');
/* eslint-disable camelcase */

module.exports = {
  messages: {
    get: function (req, res) {
      Messages.findAll( {include: [User]} )
        .then(function(err, results) {
          res.json(results);
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
      var [user, created] = User.findOrCreate({where: {name: req.body.username}})
        .then(function(err, user) {
          var content = {
            message: req.body.message,
            roomname: req.body.roomname,
            user_id: 1
          };
          Messages.create(content)
            .then(function(err, results) {
              // res.sendStatus(201);
            });
        });
      console.log('username', user.name);
      // console.log('controllers post');
      // console.log('req here', req);
      // models.messages.post(req.body, (err, data) => {
      //   if (err) {
      //     res.send(err);
      //   } else {
      //     res.send('jobs done');
      //   }
      // });
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

