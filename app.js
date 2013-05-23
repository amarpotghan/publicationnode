var express = require('express');

var app = module.exports = express();

// settings



// set views for error and 404 pages
app.set('views', __dirname + '/views');

// define a custom res.message() method
// which stores messages in the session
app.response.message = function(msg){
    // reference `req.session` via the `this.req` reference
    var sess = this.req.session;
    // simply add the msg to an array for later
    sess.messages = sess.messages || [];
    sess.messages.push(msg);
    return this;
};

// log
if (!module.parent) app.use(express.logger('dev'));

// serve static files
app.use(express.static(__dirname + '/app'));

// session support
app.use(express.cookieParser('some secret here'));
app.use(express.session());

// parse request bodies (req.body)
app.use(express.bodyParser());

// support _method (PUT in forms etc)
app.use(express.methodOverride());

// expose the "messages" local variable when views are rendered
app.use(function(req, res, next){
    var msgs = req.session.messages || [];

    // expose "messages" local variable
    res.locals.messages = msgs;

    // expose "hasMessages"
    res.locals.hasMessages = !! msgs.length;

    /* This is equivalent:
     res.locals({
     messages: msgs,
     hasMessages: !! msgs.length
     });
     */

    next();
    // empty or "flush" the messages so they
    // don't build up
    req.session.messages = [];
});

// load controllers
require('./lib/config/UrlDecoder')(app, { verbose: !module.parent });

if (!module.parent) {
    app.listen(5000);
    console.log('\n  listening on port 5000\n');
}