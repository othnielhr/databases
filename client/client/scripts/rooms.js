// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

<<<<<<< HEAD
  // TODO: Define how you want to store the list of rooms
  _storage: {},
  currentRoom: null,

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  addRoom: function(data) {
    // console.log('data', data);
    for (var i = 0; i < data.length; i++) {
      if (!this._storage[data[i].roomname]) {
        this._storage[data[i].roomname] = data[i].roomname;
      }
    }
    // console.log('roomnames', this._storage);
    return this._storage;
  }
=======

  _data: new Set,
>>>>>>> 85af38ff5bfffe2ef5c97b22ae49dca347dd5313

  selected: 'lobby',

  items: function() {
    return _.chain([...Rooms._data]);
  },

  isSelected: function(roomname) {
    return roomname === Rooms.selected ||
           !roomname && Rooms.selected === 'lobby';
  },

  add: function(room, callback = ()=>{}) {
    Rooms._data.add(room);
    Rooms.selected = room;
    callback(Rooms.items());
  },

  update: function(messages, callback = ()=>{}) {
    var length = Rooms._data.size;

    _.chain(messages)
      .pluck('roomname')
      .uniq()
      .each(room => Rooms._data.add(room));

    if (Rooms.selected === null) {
      // make the first room the default selected room
      Rooms.selected = Rooms._data.values().next().value;
    }

    // only invoke the callback if something changed
    if (Rooms._data.size !== length) {
      callback(Rooms.items());
    }
  }
  
};