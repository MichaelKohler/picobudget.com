export function routerConfig ($routeProvider, $locationProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/', {
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .when('/dashboard', {
      templateUrl: 'app/components/dashboard/dashboard.html',
      controller: 'DashboardController',
      controllerAs: 'dashboard'
    })
    .otherwise({
      redirectTo: '/'
    });
}
