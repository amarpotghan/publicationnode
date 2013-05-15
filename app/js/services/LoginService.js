'use strict';
myApp.factory('LoginService', function($resource){
    return $resource('/api/login');
});
