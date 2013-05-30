var directoryService = require('../../lib/utils/DirectoryToJson.js');

exports.before = function(req, res, next){
    next();
};
exports.listone=function(req,res,next){
    jsonDirectory=new Object();
    jsonDirectory=new  directoryService.DirectoryToJson('./app');
    jsonresponse=jsonDirectory.dirTree('./app');
    jsonresponse=[jsonresponse];
    res.send(jsonresponse);
    return jsonresponse;
};

