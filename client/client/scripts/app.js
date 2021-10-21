// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();


    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
<<<<<<< HEAD
    setInterval(App.fetch, 5000);
    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
  },
=======


    // Poll for new messages every 3 sec
    setInterval(App.fetch, 3000);
      },
>>>>>>> 85af38ff5bfffe2ef5c97b22ae49dca347dd5313

  fetch: function(callback = ()=>{}) {
    // debugger;


    Parse.readAll((data) => {
<<<<<<< HEAD
      // console.log('inside fetch', data);
      // examine the response from the server request:
      // console.log(data);
      Messages.retrieveFrom(data);
      Rooms.addRoom(data);
      // return data;
      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
      RoomsView.render();
      MessagesView.render();
    });
    callback();
=======

      // Only update if we have messages.
      if (data && data.length) {
        Rooms.update(data, RoomsView.render);
        Messages.update(data, MessagesView.render);
 
        callback();
      }
      return;
      
          });
>>>>>>> 85af38ff5bfffe2ef5c97b22ae49dca347dd5313
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};

