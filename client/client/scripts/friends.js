// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {

<<<<<<< HEAD
  _myFriends: {},

  toggleStatus: function() {
    console.log('just trying to pass');
  }
  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.
=======
  _data: new Set,

  items: function() {
    return _.chain([...Friends._data]);
  },
>>>>>>> 85af38ff5bfffe2ef5c97b22ae49dca347dd5313

  isFriend: function(name) {
    return Friends._data.has(name);
  },

  toggleStatus: function(name, callback = ()=>{}) {
    if (Friends._data.has(name)) {
      Friends._data.delete(name);
      callback(false);
    } else {
      Friends._data.add(name);
      callback(true);
    }
  }
  
};