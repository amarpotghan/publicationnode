/**
 * Created with IntelliJ IDEA.
 * User: CS11
 * Date: 13/5/13
 * Time: 5:38 PM
 * To change this template use File | Settings | File Templates.
 */

var  http = require('http'),
     api = require('./routes/ApiRouter');

var Router=function()
{
//Will be initializing some common properties here
}

Router.prototype.getRoutes=function(app){

app.get('/api/tree', api.treeStruct);
app.get('/api/login',api.confirmlogin);
app.get('/api/getFileData:path',api.getFileData);
app.get('/api/getDirectory',api.getDirectoryStructure);
return app;

}

module.exports.Router=Router;
