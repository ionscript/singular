(function () {
    'use strict';

    /**
     * @namespace app
     * @description Application Main Module
     */
    angular.module('app', [
        /* shared modules */
        'app.core',

        /* custom modules */
        'app.login',
        'app.dashboard'

    ]);
})();
