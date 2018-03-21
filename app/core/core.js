(function () {
    'use strict';

    /**
     * @namespace app.core
     * @description Core Module
     */
    angular
        .module('app.core', [
            /* Angular modules */
            'ngRoute',

            /* core modules  */
            /* TODO[NOTICE]: If need core library can restructured into smaller entities */
            /* TODO[NOTICE]: example: app.core.cache */
            /* TODO[NOTICE]: example: app.core.storage */

            /* 3rd-party modules  */
            'ui.bootstrap'
        ]).run(function (TemplateCache) {
            TemplateCache.init();
        });
})();
