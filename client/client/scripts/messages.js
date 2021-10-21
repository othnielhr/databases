// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

<<<<<<< HEAD
  // TODO: Define how you want to store your messages.
  _data: [],

  retrieveFrom: function(messages) {
    this._data = [];
    this._data = this._data.concat(messages);
    // console.log(this._data);
    return this._data;
  },
=======
>>>>>>> 85af38ff5bfffe2ef5c97b22ae49dca347dd5313

  _data: {},

  items: function() {
    return _.chain(Object.values(Messages._data)).sortBy('createdAt');
  },

  add: function(message, callback = ()=>{}) {
    Messages._data[message.message_id] = message;
    callback(Messages.items());
  },

  update: function(messages, callback = ()=>{}) {
    var length = Object.keys(Messages._data).length;

    for (let message of messages) {
      Messages._data[message.message_id] = Messages._conform(message);
    }

    // only invoke the callback if something changed
    if (Object.keys(Messages._data).length !== length) {
      callback(Messages.items());
    }
  },

  _conform: function(message) {
    // ensure each message object conforms to expected shape
    message.text = message.text || '';
    message.username = message.username || '';
    message.roomname = message.roomname || '';
    return message;
  }
  
};