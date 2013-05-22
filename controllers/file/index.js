var directoryService = require('../../lib/services/DirectoryToJson.js');
fileReaderService = require('../../lib/services/FileReaderService.js');


exports.before = function(req, res, next){
    next();
};
exports.filepath= function(req, res,next){
    fileReader=new Object();
    fileReader=new fileReaderService.FileReaderService();
    contents = fileReader.readFile(req.param('path'));
    console.log(req.param('path'));
    res.send([{text: contents}]);

};