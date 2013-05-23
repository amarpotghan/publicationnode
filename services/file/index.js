var util = require('../../lib/utils/FileReader.js');

exports.before = function(req, res, next){
    next();
};
exports.filepath= function(req, res,next){

    var reader= new util.FileReader();
    var contents=reader.readFileContents(req.param('path'));
    res.send([{text: contents}]);

};