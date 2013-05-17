'use strict';
myApp.factory('FileService', function($resource){

    var fileService ={};

    fileService.getFileData = function(path){
         return $resource('api/getFileData:path',{path:'@path'},true);
     }
    return fileService;
});
