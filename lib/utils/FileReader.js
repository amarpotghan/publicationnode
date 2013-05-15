/**
 * Created with JetBrains WebStorm.
 * User: CS13
 * Date: 15/5/13
 * Time: 1:24 PM
 * To change this template use File | Settings | File Templates.
 */
var fs = require('fs'),
    path = require('path') ;
var FileReader = function (filepath) {
    this.filepath= filepath;
    this.fileContents='';

};

FileReader.prototype.readFileContents=function()
{
    this.fileContents = fs.readFileSync('./app/js/app.js','utf8');
    return this.fileContents;

}

module.exports.FileReader=FileReader;

