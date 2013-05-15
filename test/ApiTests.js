/**
 * Created with IntelliJ IDEA.
 * User: CS11
 * Date: 10/5/13
 * Time: 5:10 PM
 * To change this template use File | Settings | File Templates.
 */

var express = require('express')
    , routes = require('../routes')

//, user = require('./routes/user')
    , http = require('http')
    , api = require('../routes/file')
    , path = require('path');

var request = require('superagent');
var expect = require('expect.js');

describe('Suite one', function(){
    it (function(done){
        request.get('localhost:8080/login').end(function(res){
            expect(res).to.exist;
            expect(res.status).to.equal(200);
            expect(res.body).to.contain('Hello');

            done();
        });
    });
});