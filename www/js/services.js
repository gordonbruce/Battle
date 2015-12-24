angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])
.factory("Mensagens", function($firebaseArray) {
  var messagesRef = new Firebase('https://crackling-fire-8527.firebaseio.com/nome/');
  return messagesRef;
})
.service('BlankService', [function(){

}]);

