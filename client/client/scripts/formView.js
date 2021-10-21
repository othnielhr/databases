// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
<<<<<<< HEAD
    var message = {
      username: App.username,
      text: document.getElementById('message').value,
      roomname: Rooms.currentRoom
    };
    var pass = function() {
      App.fetch();
    };
    var fail = function() {
      console.log('failed to submit message!!');
    };
    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.

    console.log('click!', message);
    Parse.create(message, pass, fail => {});
    document.getElementById('message').value = '';
  },
=======


    var message = {
      username: App.username,
      text: FormView.$form.find('#message').val(),
      roomname: Rooms.selected || 'lobby'
    };

    Parse.create(message, (data) => {
      _.extend(message, data[0]);
      Messages.add(message, MessagesView.render);
    });
      },
>>>>>>> 85af38ff5bfffe2ef5c97b22ae49dca347dd5313

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};