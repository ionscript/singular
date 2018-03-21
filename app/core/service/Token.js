/**
 * @name app.core.Token
 * @description Token
 * @param {app.core.Session} Session
 * @returns {{}}
 * @constructor
 * @ngInject
 */
function Token(Session) {
    var Token = {};
    Token.set = function(key, value) {
        Session.set(key, value);
    };

    Token.get = function(key) {
        return Session.get(key);
    };
    return Token;
}

angular.module('app.core')
    .factory('Token', Token);
