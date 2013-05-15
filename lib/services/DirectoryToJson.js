/**
 * Created with IntelliJ IDEA.
 * User: CS11
 * Date: 13/5/13
 * Time: 3:40 PM
 * To change this template use File | Settings | File Templates.
 */

/**
 * Created with IntelliJ IDEA.
 * User: CS11
 * Date: 13/5/13
 * Time: 1:58 PM
 * To change this template use File | Settings | File Templates.
 */
var fs = require('fs'),
    path = require('path') ;

var fileName='';
var DirectoryToJson = function (file) {
    fileName = file;
};


    DirectoryToJson.prototype.dirTree=function(filename) {
        jsonDirectory=new DirectoryToJson('D:\\mam');
        var stats = fs.lstatSync(filename),
            info = {
                path: filename,
                name: path.basename(filename)
            };

        if (stats.isDirectory()) {
            info.type = "folder";
            info.nodes = fs.readdirSync(filename).map(function(child) {
                return jsonDirectory.dirTree(filename + '/' + child);
            });
        } else {
            // Assuming it's a file. In real life it could be a symlink or
            // something else!
            info.type = "file";
            info.nodes=[];
        }

        return info;


}

module.exports.DirectoryToJson=DirectoryToJson;



