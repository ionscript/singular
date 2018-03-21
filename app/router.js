/**
 * @name app.Router
 * @description Router
 * @param {$routeProvider} $routeProvider {@link https://docs.angularjs.org/api/ngRoute/provider/$routeProvider}
 * @constructor
 * @ngInject
 */
function Router($routeProvider) {
    $routeProvider
        .when('/auth/login.html', {
            templateUrl: '/views/login.html',
            controller: 'LoginController',
            controllerAs: 'login'
        })
        .when('/dashboard/index.html', {
            templateUrl: '/views/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'dashboard'
        })
        .otherwise({
            redirectTo: '/_404.html'
        });
}

angular.module('app')
    .config(Router);
