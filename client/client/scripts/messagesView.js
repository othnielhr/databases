// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),
  $username: $('.username'),

  initialize: function() {

    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);
      },

  render: function() {
<<<<<<< HEAD
    $('#chats').empty();
    // TODO: Render _all_ the messages.
    for (var i = 0; i < Messages._data.length; i++) {
      if (Rooms.currentRoom === Messages._data[i].roomname) {
        MessagesView.renderMessage(Messages._data[i]);
      } else if (Rooms.currentRoom === null) {
        MessagesView.renderMessage(Messages._data[i]);
      }
    }
    $('.username').on('click', MessagesView.handleClick);
  },

  renderMessage: function(message) {
    var render;
    if (message.username === Friends._myFriends[message.username]) {
      rendered = MessageView.renderFriend(message);
    } else {
      rendered = MessageView.render(message);
      // console.log('inside render message func', rendered);
    }
    this.$chats.append(rendered);
    $('.username').on('click', MessagesView.handleClick);
    // console.log(this.$chats);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // console.log('event', event);
    // (this should add the sender to the user's friend list).
    var username = event.currentTarget.innerText;
    // event.currentTarget.setAttribute('class', 'friend');
    if (Friends._myFriends[username] === undefined) {
      Friends._myFriends[username] = username;
      Friends.toggleStatus();
    } else {
      delete Friends._myFriends[username];
      Friends.toggleStatus();
    }
    // console.log(Friends._myFriends);
    MessagesView.render();
  }
=======

    MessagesView.$chats.html('');
    Messages
      .items()
      .filter(message => Rooms.isSelected(message.roomname))
      .each(message => MessagesView.renderMessage(message));
      },

  renderMessage: function(message) {

    var $message = MessageView.render(message);
    MessagesView.$chats.prepend($message);
      },

  handleClick: function(event) {

    // Get username from data attribute
    var username = $(event.target).data('username');
    if (username === undefined) { return; }

    Friends.toggleStatus(username, MessagesView.render);
      }
>>>>>>> 85af38ff5bfffe2ef5c97b22ae49dca347dd5313

};