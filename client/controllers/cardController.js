angular.module('flashcard.card',[])
.controller('cardsController', ['$scope', function($scope){
  $scope.decks =[{front: '1', back:'one', display: 'front'},
  {front: '2', back:'two', display: 'front'},
  {front: '3', back:'three', display: 'front'},
  {front: '4', back:'four', display: 'front'},
  {front: '5', back:'five', display: 'front'},
  {front: '6', back:'six', display: 'front'}
  ];

  $scope.toggleDisplay = function(index) {
    if ($scope.decks[index].display === 'front') {
      $scope.decks[index].display = 'back';
    } else {
      $scope.decks[index].display = 'front';
    }
  };
}]);