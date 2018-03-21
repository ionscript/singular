/**
 * @name app.login.LoginController
 * @description Login Controller
 * @param {app.core.Admin} Admin
 * @constructor
 * @ngInject
 */
function LoginController(Admin) {
    var login = this;

    /**
     * @function
     * @name app.login.LoginController.submit
     * @description Form submit action for user login
     */
    var submit = function() {
        Admin.login(login.user)
            .then(function(error) {
                login.error = error;
            });

        /* TODO:[TASK] replace [errorClose] in LoginDirective */
        login.errorClose = function() {
            login.error = '';
        };

        /* TODO:[TASK] replace [onViewLoad] in LoginDirective */
        login.onViewLoad = function() {
            console.log('load');
        };
    };

    login.submit = submit;
}

angular
    .module('app.login')
    .controller('LoginController', LoginController);
