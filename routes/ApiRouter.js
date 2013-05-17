var directoryService = require('../lib/services/DirectoryToJson.js');
fileReaderService = require('../lib/services/FileReaderService.js');
 http = require('http'),
    fileSystem = require('fs'),
    path = require('path')
util = require('util');

exports.confirmlogin = function(req, res){

  res.send(200,[{text:'success'}]);
};


exports.getFileData= function(req, res){
    fileReader=new Object();
    fileReader=new fileReaderService.FileReaderService();
    contents = fileReader.readFile(req.param('path'));
    res.send([{text: contents}]);
    console.log('In getFileData');
  /*  var readStream = fileSystem.createReadStream(req.param('path'));
    // We replaced all the event handlers with a simple call to util.pump()
    util.pump(readStream, res);
    */

};

exports.getDirectoryStructure=function(req,res){
    jsonDirectory=new Object();
    jsonDirectory=new  directoryService.DirectoryToJson('./app');
    jsonresponse=jsonDirectory.dirTree('./app');
    jsonresponse=[jsonresponse];
    res.send(jsonresponse);
}

exports.treeStruct = function(req, res){
};