/*
var assert = require('assert');
var request = require('superagent');
var expect = require('expect.js');
describe("Feature: Get Directory JSON for viewing directory in the browser", function () {
    var http_client;

    before(function () {

    });

    context("Scenario: USer should see get directory structure", function () {
        context("Given that base directory exists", function () {
            context("When an API client GETs to /directory ", function () {
                var params;
                var response;
                var raw_res;

                it ('should return JSON for given directory',function(done){
                    request.get('/directory',function(res){
                        expect(res).to.exist;
                        console.log(res);
                        done();
                    });
                });
            });
        });
    });
});
*/

var app = require('../../../app.js')
    , http = require('support/http');

describe('User API',function(){

    before(function(done){
        http.createServer(app,done);
    });

    it('GET /directry should return 200',function(done){
        request()
            .get('/users')
            .expect(200,done);
    });

    it('POST /users should return 200',function(done){
        request()
            .post('/users')
            .set('Content-Type','application/json')
            .write(JSON.stringify({ username: 'test', password: 'pass' }))
            .expect(200,done);
    });
});