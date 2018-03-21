/**
 * @name app.dashboard.DashboardController
 * @description Dashboard Controller
 * @constructor
 * @ngInject
 */
function DashboardController(Admin) {
    var dashboard = this;

    /**
     * @function
     * @name app.dashboard.DashboardController
     * @description Logout
     */
    var logout = function() {
        Admin.logout();
    };

    dashboard.logout = logout;
}

angular
    .module('app.dashboard')
    .controller('DashboardController', DashboardController);
