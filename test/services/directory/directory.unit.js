/**
 * Created with IntelliJ IDEA.
 * User: CS11
 * Date: 10/5/13
 * Time: 5:10 PM
 * To change this template use File | Settings | File Templates.
 */

var request = require('superagent');
var expect = require('expect.js');
/*
describe('Directory JSON test /directory', function(){


    it ('should return JSON object for given directory',function(done){
        request.get('http://localhost:5000/directory',function(res){
            expect(res).to.exist;
            expect(res).not.to.be.empty();
            expect(res).to.be.an('object');
            expect(res).to.be.ok;
            done();
        });
    })

    it ('should not return anything',function(done){
        request.get('/directory/1',function(res){
            console.log(res.body);
           expect(res.body).to.be.empty();
           done();
        });
    })

});*/
suite('Directory Service', function() {
    test('it should return JSON for given directory', function(done) {
        request.get('http://localhost:5000/directory', function(res) {
           expect(res).to.exist;
           expect(res).not.to.be.empty();
            done();
        });
    });
});