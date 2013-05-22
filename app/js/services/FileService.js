'use strict';
myApp.factory('FileService', function($resource){

    var fileService ={};

    fileService.getFileData = function(path){
         return $resource('file:path',{path:'@path'},true);
     }
    return fileService;
});
