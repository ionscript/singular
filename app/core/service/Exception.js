/**
 * @name app.core.Exception
 * @description Exception Handler
 * @param {angular.$log} $log {@link https://docs.angularjs.org/api/ng/service/$log}
 * @returns {{}}
 * @constructor
 * @ngInject
 */
function Exception($log) {
    var Exception = {};

    Exception.Log = {
        error: function(exception, cause) {
            $log.error('ERROR [' + cause + ']: ' + exception.message + '!');
        },
        warn: function(exception, cause) {
            $log.warn('WARNING [' + cause + ']: ' + exception.message + '!');
        },
        info: function(exception, cause) {
            $log.info('INFO [' + cause + ']: ' + exception.message + '!');
        },
        log: function(exception, cause) {
            $log.log('LOG [' + cause + ']: ' + exception.message + '!');
        },
        debug: function(exception, cause) {
            $log.debug('DEBUG [' + cause + ']: ' + exception.message + '!');
        },
        throws: function(exception) {
            throw exception.message;
        }
    };
    return Exception;
}

angular.module('app.core')
    .factory('Exception', Exception);
