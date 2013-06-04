var assert = require('assert');
var request = require('superagent');
var expect = require('expect.js');



suite('File Service', function() {
    test('should return file contents for given filepath', function(done) {
        request.get('http://localhost:5000/file.%2Fapp%2Fjs%2Fcontrollers%2FLoginController.js', function(res) {
            expect(res).to.exist;
            expect(res.body).not.to.be.empty();
            expect(res).to.be.an('object');
            done();
        });
    });
    test('should return empty response', function(done) {
        request.get('http://localhost:5000/file', function(res) {
            expect(res).to.exist;
            expect(res.body).to.be.empty();
            expect(res).to.be.an('object');
            done();
        });
    });
});

    /*;*/
