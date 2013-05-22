'use strict';
myApp.factory('LoginService', function($resource){
    return $resource('login');

});
