/**
 * @name app.Config
 * @description Main Configuration
 * @param {$locationProvider} $locationProvider
 * {@link https://docs.angularjs.org/api/ng/provider/$locationProvider}
 * @param {$httpProvider} $httpProvider
 * {@link https://docs.angularjs.org/api/ng/provider/$httpProvider}
 * @param {$logProvider} $logProvider
 * {@link https://docs.angularjs.org/api/ng/provider/$logProvider}
 * @constructor
 * @ngInject
 */
function Config($locationProvider, $httpProvider, $logProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    $httpProvider.interceptors.push('Auth');

    /* debug: on[true], off[false]  */
    $logProvider.debugEnabled(true);
}

angular.module('app')
    .config(Config);
