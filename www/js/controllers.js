angular.module('app.controllers', [])
     
.controller('signupCtrl', function($scope) {

})
   
.controller('loginCtrl', function($scope) {

})
   
.controller('personagemCtrl', function($scope) {

})
   
.controller('missoesCtrl', function($scope) {

})
   
.controller('mapaCtrl', function($scope) {

})
   
.controller('jogoCtrl', function($scope) {
	 // CREATE A REFERENCE TO FIREBASE
    var messagesRef = new Firebase('https://crackling-fire-8527.firebaseio.com/nome/');

    // REGISTER DOM ELEMENTS
  //  var messageField = $('#messageInput');
    //var nameField = $('#nameInput');
    var messageList = $('#game-messages');

    // LISTEN FOR KEYPRESS EVENT
  /*  messageField.keypress(function (e) {
      if (e.keyCode == 13) {
        //FIELD VALUES
        var username = nameField.val();
        var message = messageField.val();

        //SAVE DATA TO FIREBASE AND EMPTY FIELD
        messagesRef.push({name:username, text:message});
        messageField.val('');
      }
    }); */

    // Add a callback that is triggered for each chat message.
    messagesRef.limitToLast(10).on('child_added', function (snapshot) {
      //GET DATA
      var data = snapshot.val();
      var username = data.name || "anonymous";
      var message = data.text;
  
      var messageText = "<a class='item item-avatar' href='#'><img src='https://en.gravatar.com/avatar/717ee15a5d86c2b8eded5a80adc58e30.jpg?d=retro&size=80'><h2>"+username+"</h2><p>"+message+"</p></a>";

      //ADD MESSAGE
      messageList.append(messageText);

      messageList[0].scrollTop = messageList[0].scrollHeight;

    });
})
 