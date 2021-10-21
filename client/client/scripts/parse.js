// The Parse object represents your connection to outside world!
// Or... just the Parse API. Populate this object with methods
// which send requests to the RESTful Parse API.

var Parse = {

  server: `https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/${window.CAMPUS}`,

  create: function(message, successCB, errorCB = null) {
<<<<<<< HEAD
    // TODO: send a request to the Parse API to save the message
=======

>>>>>>> 85af38ff5bfffe2ef5c97b22ae49dca347dd5313
    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB,
<<<<<<< HEAD
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to send messages', error);
      }
    });
  },
=======
      error: errorCB || function (error) {
        console.error('chatterbox: Failed to create message', error);
      }
    });
      },
>>>>>>> 85af38ff5bfffe2ef5c97b22ae49dca347dd5313

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};
