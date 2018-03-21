/**
 * @name app.core.Auth
 * @description Authentication
 * @param {angular.$q} $q {@link https://docs.angularjs.org/api/ng/service/$q}
 * @param {angular.$location} $location {@link https://docs.angularjs.org/api/ng/service/$location}
 * @param {app.core.Token} Token
 * @returns {{}}
 * @constructor
 * @ngInject
 */
function Auth($q, $location, Token) {
    var Auth = {};
    Auth.response = function(response) {
        return response;
    };
    Auth.responseError = function(response) {
        if ((401 == response.status || 403 == response.status) && '/auth/login.html' != $location.path()) {
            $location.path('/auth/login.html');
        }
        return $q.reject(response);
    };
    Auth.request = function(request) {
        request.headers['X-APP-AUTH'] = Token.get('X-APP-AUTH');
        return request;
    };
    Auth.requestError = function(request) {
        return $q.reject(request);
    };
    return Auth;
}

angular.module('app.core')
    .factory('Auth', Auth);
