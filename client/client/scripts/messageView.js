// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(`
<<<<<<< HEAD
      <div class="chat">
        <div class="username"><%= username %></div>
        <div class="text"><%= text %></div>
      </div>
    `),

  renderFriend: _.template(`
      <div class="chat">
        <div class="username friend"><%= username %></div>
        <div class="text"><%= text %></div>
      </div>
    `),
};
=======
      <!--

      -->
      <div class="chat">
        <div
          class="username <%= Friends.isFriend(username) ? 'friend' : '' %>"
          data-username="<%- username %>">
          <%- username %>
        </div>
        <div><%- text %></div>
      </div>
      <!--
            -->
    `)
>>>>>>> 85af38ff5bfffe2ef5c97b22ae49dca347dd5313

