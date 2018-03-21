/**
 * @name app.bootstrap
 * @description Bootstrapping Application
 */
angular.element(document).ready(function() {
    angular.bootstrap(document, ['app'], {
        strictDi: true
    });
});
