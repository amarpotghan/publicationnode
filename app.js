var express = require('express')
    , http = require('http')
    , api = require('./routes/ApiRouter')
    , path = require('path')
    ,pathrouter=require('./router.js');


exports.start= function(PORT, STATIC_DIR,TEST_DIR){
var app = express();

// all environments
app.set('port',PORT);
app.set('views', __dirname + '/views');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(STATIC_DIR));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}
//Router
router=new pathrouter.Router();
router.getRoutes(app);



http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
}