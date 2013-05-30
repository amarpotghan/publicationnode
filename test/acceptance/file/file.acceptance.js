var assert = require('assert');
var request = require('superagent');
var expect = require('expect.js');
describe("Feature: Open File in the tab", function () {
    var http_client;

    before(function () {

    });

    context("Scenario: clicking on the file", function () {
        context("Given that file exists", function () {
            context("When an API client GETs to /file:path ", function () {
                var params;
                var response;
                var raw_res;

                it ('should return fileContents',function(done){
                    request.get('/file.%2Fapp%2Fjs%2Fcontrollers%2FLoginController.js',function(res){
                        expect(res).to.exist;
                        console.log(res);
                        done();
                    });
                });
            });
        });
    });
});
