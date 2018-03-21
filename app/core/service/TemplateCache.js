/**
 * @name app.core.TemplateCache
 * @description All Templates Cache
 * @param {angular.$templateCache} $templateCache
 * {@link https://docs.angularjs.org/api/ng/service/$templateCache}
 * @returns {{}}
 * @constructor
 * @ngInject
 */
function TemplateCache($templateCache) {
var TemplateCache = {};
TemplateCache.init = function() {  'use strict';

  $templateCache.put('/views/dashboard.html',
    "<nav class=\"navbar navbar-inverse navbar-fixed-top\"><div class=container-fluid><div class=navbar-header><button type=button class=navbar-toggle data-toggle=collapse data-target=.navbar-collapse><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a class=navbar-brand href=index.html>DD <i class=\"fa fa-ship\"></i>SHIP</a></div><div id=navbar class=\"navbar-collapse collapse\"><ul class=\"nav navbar-nav navbar-right\"><li><a href=#><i class=\"fa fa-sign-out fa-fw\"></i> Logout</a></li></ul></div></div></nav><div class=container-fluid><div class=row><div class=\"col-sm-3 col-md-2 sidebar\"><ul class=\"nav nav-sidebar\"><li class=active><a href=#><i class=\"fa fa-tachometer fa-fw\"></i> Dashboard <span class=sr-only>(current)</span></a></li><li><a href=#><i class=\"fa fa-gear fa-fw\"></i> Inventory</a></li><li><a href=#><i class=\"fa fa-truck fa-fw\"></i> Shipping</a></li><li><a href=#><i class=\"fa fa-reply-all fa-fw\"></i> Return</a></li><li><a href=#><i class=\"fa fa-gear fa-fw\"></i> Settings</a></li></ul></div><div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main\"><div class=\"col-lg-3 col-md-6\"><div class=\"panel panel-success\"><div class=panel-heading><div class=row><div class=col-xs-3><i class=\"fa fa-cubes fa-5x\"></i></div><div class=\"col-xs-9 text-right\"><div class=huge>12</div><div>Inventory</div></div></div></div><a href=#><div class=panel-footer><span class=pull-left>View Details</span> <span class=pull-right><i class=\"fa fa-arrow-circle-right\"></i></span><div class=clearfix></div></div></a></div></div><div class=\"col-lg-3 col-md-6\"><div class=\"panel panel-warning\"><div class=panel-heading><div class=row><div class=col-xs-3><i class=\"fa fa-shopping-cart fa-5x\"></i></div><div class=\"col-xs-9 text-right\"><div class=huge>124</div><div>Orders</div></div></div></div><a href=#><div class=panel-footer><span class=pull-left>View Details</span> <span class=pull-right><i class=\"fa fa-arrow-circle-right\"></i></span><div class=clearfix></div></div></a></div></div><div class=\"col-lg-3 col-md-6\"><div class=\"panel panel-info\"><div class=panel-heading><div class=row><div class=col-xs-3><i class=\"fa fa-ship fa-5x\"></i></div><div class=\"col-xs-9 text-right\"><div class=huge>26</div><div>Shippings</div></div></div></div><a href=#><div class=panel-footer><span class=pull-left>View Details</span> <span class=pull-right><i class=\"fa fa-arrow-circle-right\"></i></span><div class=clearfix></div></div></a></div></div><div class=\"col-lg-3 col-md-6\"><div class=\"panel panel-danger\"><div class=panel-heading><div class=row><div class=col-xs-3><i class=\"fa fa-reply-all fa-5x\"></i></div><div class=\"col-xs-9 text-right\"><div class=huge>13</div><div>Returns</div></div></div></div><a href=#><div class=panel-footer><span class=pull-left>View Details</span> <span class=pull-right><i class=\"fa fa-arrow-circle-right\"></i></span><div class=clearfix></div></div></a></div></div></div></div></div>"
  );


  $templateCache.put('/views/login.html',
    "<div class=\"container-fluid login\"><div class=\"main-login col-md-3 col-md-offset-4\"><div class=logo>DD <i class=\"fa fa-ship\"></i>SHIP</div><div class=well><form class=form-login name=form novalidate><fieldset><h3>Log in</h3><p>Please enter your name and password to log in.</p><alert ng-hide=!login.error close=login.errorClose() ng-show=login.error type=danger>{{ ::login.error }}</alert><div class=\"form-group input-group\"><div class=input-group-addon><i class=\"fa fa-user fa-fw\"></i></div><input name=username class=form-control placeholder=Username ng-model=login.user.username required autofocus></div><div class=\"form-group input-group\"><div class=input-group-addon><i class=\"fa fa-lock fa-fw\"></i></div><input type=password name=password class=form-control placeholder=Password ng-model=login.user.password required></div><div class=form-group><button class=\"btn btn-lg btn-primary btn-block btn-login\" type=button ng-disabled=form.$invalid ng-click=login.submit()>Login <i class=\"fa fa-sign-in\"></i></button></div><p></p></fieldset></form></div><div class=copyright>Copyright &copy; 2015 DDShip</div></div></div>"
  );
};
return TemplateCache;}
angular.module('app.core')
.factory('TemplateCache', TemplateCache);
