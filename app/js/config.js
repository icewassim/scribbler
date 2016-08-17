let configRouter = function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home-view', {
      url: '/home-view',
      templateUrl: 'board/views/board-view.html',
      controller: 'InitController'
    });
  $urlRouterProvider.otherwise('home-view');
};

configRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

export default configRouter;
