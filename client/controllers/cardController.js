angular.module('flashcard.cards',[])
.controller('cardsController', ['$scope', '$http','$timeout',function($scope, $http, $timeout){
  $scope.decks =[];
  $scope.index = 1;
  $timeout(function(){
    /*
    $scope.decks = 
  [{front: '1', back:'one', display: 'front'},
  {front: '2', back:'two', display: 'front'},
  {front: '3', back:'three', display: 'front'},
  {front: '4', back:'four', display: 'front'},
  {front: '5', back:'five', display: 'front'},
  {front: '6', back:'six', display: 'front'}
  ]*/
    $scope.fetchData(function(data) {
      for (var i = 0; i < data.length; i++) {
        data[i].display = 'front';
      }
      $scope.decks = data;
    });
  },50);
  

  $scope.toggleDisplay = function(index) {
    if ($scope.decks[index].display === 'front') {
      $scope.decks[index].display = 'back';
    } else {
      $scope.decks[index].display = 'front';
    }
  };

  $scope.fetchData = function(callback){
    $http.get('/api/javascript')
    .success(function(data) {
      callback(data);
    })
    .catch(function(err){
      console.log(err);
    });
  };
  $scope.consoleLog = function(data) {
    console.log(data);
  }
}])
.directive('pulseOnClick', function($animate){
  return function(scope, elem){
    elem.on('click', function(){
      $animate.animate(elem, 'someclass')
        .then(function(){
          console.log('Done pulsing');
        })
      scope.$apply();
    });
  };
});