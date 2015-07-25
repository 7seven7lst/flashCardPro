angular.module('flashcard', ['ui.router', 'flashcard.card'])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      views: {
        cards_view: {
          templateUrl: './views/cards.html',
          controller: 'cardsController'
        }
        
      }
    });
})
.controller('mainController', ['$scope',function($scope) {
}]);
