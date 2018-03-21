/**
 * @name app.core.Cache
 * @description Cache
 * @param {angular.$cacheFactory} $cacheFactory {@link https://docs.angularjs.org/api/ng/service/$cacheFactory}
 * @returns {{}}
 * @constructor
 * @ngInject
 */
function Cache($cacheFactory) {

    var Cache = {};

    Cache.set = function(id) {
        return $cacheFactory(id);
    };

    Cache.get = function(id) {
        return $cacheFactory.get(id);
    };

    Cache.getInstance = function(id) {
        return $cacheFactory.get(id) ? $cacheFactory.get(id) : $cacheFactory(id);
    };

    Cache.getAll = function() {
        return $cacheFactory.info();
    };

    /* TODO[TASK]: add clear & remove methods */

    return Cache;
}

angular
    .module('app.core')
    .factory('Cache', Cache);
