/**
 * @name app.core.Session
 * @description Client Session
 * @param {angular.$window} $window {@link https://docs.angularjs.org/api/ng/service/$window}
 * @returns {{}}
 * @constructor
 * @ngInject
 */
function Session($window) {

    var Session = {};

    Session.set = function(key, value) {
        $window.sessionStorage.setItem(key, value);
    };
    Session.get = function(key) {
        return $window.sessionStorage.getItem(key);
    };
    Session.remove = function(key) {
        $window.sessionStorage.removeItem(key);
    };
    Session.clear = function() {
        $window.sessionStorage.clear();
    };
    Session.key = function(value) {
        return $window.sessionStorage.key(value);
    };
    Session.length = $window.sessionStorage.length;
    return Session;
}

angular
    .module('app.core')
    .factory('Session', Session);
