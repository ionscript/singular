/**
 * @name app.core.LocalStorage
 * @description Local Storage
 * @param {angular.$window} $window {@link https://docs.angularjs.org/api/ng/service/$window}
 * @returns {{}}
 * @constructor
 * @ngInject
 */
function LocalStorage($window) {

    var LocalStorage = {};

    LocalStorage.set = function(key, value) {
        $window.localStorage.setItem(key, value);
    };
    LocalStorage.get = function(key) {
        return $window.localStorage.getItem(key);
    };
    LocalStorage.remove = function(key) {
        $window.localStorage.removeItem(key);
    };
    LocalStorage.clear = function() {
        $window.localStorage.clear();
    };
    LocalStorage.key = function(value) {
        return $window.localStorage.key(value);
    };
    LocalStorage.length = $window.localStorage.length;
    return LocalStorage;
}

angular
    .module('app.core')
    .factory('LocalStorage', LocalStorage);
