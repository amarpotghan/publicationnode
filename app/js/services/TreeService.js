'use strict';
myApp.factory('TreeService', function($resource){

/*    var remoteUtils=new RemoteUtils();
     remoteUtils.request(url,method,params,data);*/

    return $resource('api/getDirectory',true);
});
