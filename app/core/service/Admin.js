/**
 * @name app.core.Admin
 * @description Administrator
 * @param {angular.$http} $http {@link https://docs.angularjs.org/api/ng/service/$http}
 * @param {angular.$location} $location {@link https://docs.angularjs.org/api/ng/service/$location}
 * @param {app.core.Token} Token
 * @returns {{}}
 * @constructor
 * @ngInject
 */
function Admin($http, $location, Token) {
    var Admin = {};

    Admin.login = function(user) {
        var headers =  {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        var data = '_username=' + user.username + '&_password=' + user.password;
        return $http.post('/auth/login.html', data, {headers: headers})
            .then(
            function(success) {
                if (success.headers('X-APP-AUTH')) {
                    Token.set('X-APP-AUTH', success.headers('X-APP-AUTH'));
                }
                $location.path('/dashboard/index.html');
            },
            function(error) {
                Token.set('X-APP-AUTH', '');
                return error.statusText;
            }
        );
    };

    /* TODO[MOCK]: mock logout */
    Admin.logout = function() {
        $http.post('auth/logout.html', 'out=true')
            .then(
            function(success) {
                $location.path('/auth/login.html');
            },
            function(error) {
                return error.statusText;
            }
        );
    };

    return Admin;
}

angular.module('app.core')
    .factory('Admin', Admin);
