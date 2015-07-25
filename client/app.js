angular.module('flashcard', ['ui.router', 'flashcard.card'])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      views: {
        main_view: {
          templateUrl: './views/main.html',
          controller: 'cardController'
        }
        
      }
    });
})
.controller('mainController', ['$scope',function($scope) {
}]);
